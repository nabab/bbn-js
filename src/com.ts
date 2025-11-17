import _deleteLoader from './fn/ajax/_deleteLoader.js'  ;
import _addLoader from './fn/ajax/_addLoader.js'  ;

class Cancel extends Error {
  __BBN_CANCEL__: boolean;
  constructor(message: string) {
    super(message || 'Request canceled');
    this.name = 'Cancel';
    this.__BBN_CANCEL__ = true;
  }
}

const parseXhrHeaders = (raw: string) => {
  const headers: any = {};
  if (!raw) return headers;
  raw.trim().split(/[\r\n]+/).forEach(line => {
    const parts: string[] = line.split(': ');
    const key: any = parts.shift();
    const value = parts.join(': ');
    if (key) {
      headers[(key as string).toLowerCase()] = value;
    }
  });
  return headers;
};


const methodsWithBody = ['POST', 'PUT', 'PATCH', 'DELETE'];

const buildURL = (url: string, params?: any) => {
  if (!params) return url;
  const usp = new URLSearchParams(params).toString();
  return usp ? url + (url.includes('?') ? '&' : '?') + usp : url;
};

const normalizeDataAndHeaders = (data: any, headersObj: any) => {
  const headers = new Headers(headersObj || {});
  let body = data;

  if (data != null && !(data instanceof FormData) && typeof data === 'object') {
    headers.set('Content-Type', 'application/json');
    body = JSON.stringify(data);
  }

  return { body, headers };
};

const fetchRequest = (method: string, url: string, config: any = {}, aborter?: any) =>{
  const fetchConfig: any = {
    method,
    headers: new Headers(config.headers || {}),
    signal: aborter?.signal,
  };
  const hasBody = methodsWithBody.includes(method.toUpperCase());
  if (config.data != null && hasBody) {
    // You can get fancier here (JSON, FormData, etc.)
    bbn.fn.log('DATA', config.data);
    if (typeof config.data === 'object' && !(config.data instanceof FormData)) {
      fetchConfig.headers.set('Content-Type', 'application/json');
      fetchConfig.body = JSON.stringify(config.data);
    } else {
      fetchConfig.body = config.data;
    }
  }

  // Add query params support if needed
  if (config.params) {
    const usp = new URLSearchParams(config.params).toString();
    url += (url.includes('?') ? '&' : '?') + usp;
  }

  const fetchPromise: any = fetch(url, fetchConfig).then(async (res: any) => {
    let data;
    const contentType = res.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      data = await res.json();
    } else {
      data = await res.text();
    }

    const response = {
      data,
      status: res.status,
      statusText: res.statusText,
      headers: Object.fromEntries(res.headers.entries()),
      config,
      request: res,
    };

    if (!res.ok) {
      // axios rejects for 4xx/5xx
      const error: any = new Error('Request failed with status code ' + res.status);
      error.response = response;
      error.config = config;
      error.request = res;
      throw error;
    }

    return response;
  }).catch((err) => {
    if (err.name === 'AbortError') {
      throw new Cancel('Request canceled');
    }
    throw err;
  });

  // axios usually gives you the cancel token separately;
  // here we return both for convenience.
  fetchPromise.cancel = () => aborter.abort();
  return fetchPromise;
};

const xhrRequest = (method: string, url: string, config: any = {}, aborter?: any) => {
  const xhr = new XMLHttpRequest();
  const hasBody = methodsWithBody.includes(method.toUpperCase());

  const promise: any = new Promise((resolve, reject) => {
    xhr.open(method, url, true);

    // Set headers
    const { body, headers } = normalizeDataAndHeaders(config.data, config.headers);
    headers.forEach((value, key) => {
      xhr.setRequestHeader(key, value);
    });

    // Upload progress
    if (typeof config.onUploadProgress === 'function' && xhr.upload) {
      xhr.upload.addEventListener('progress', (event) => {
        const total = event.lengthComputable ? event.total : undefined;
        config.onUploadProgress({
          loaded: event.loaded,
          total,
          progress: total ? event.loaded / total : undefined
        });
      });
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return;

      const headersObj = parseXhrHeaders(xhr.getAllResponseHeaders());
      const status = xhr.status === 1223 ? 204 : xhr.status; // IE fix, mostly irrelevant now
      const statusText = xhr.statusText || '';

      let data = xhr.responseText;
      const contentType = headersObj['content-type'] || '';
      if (contentType.includes('application/json')) {
        try {
          data = JSON.parse(xhr.responseText);
        } catch (e) {
          // leave as text if JSON parse fails
        }
      }

      const response = {
        data,
        status,
        statusText,
        headers: headersObj,
        config,
        request: xhr
      };

      if (status >= 200 && status < 300) {
        resolve(response);
      } else {
        const err: any = new Error('Request failed with status code ' + status);
        err.response = response;
        err.config = config;
        err.request = xhr;
        reject(err);
      }
    };

    xhr.onerror = () => {
      const err: any = new Error('Network Error');
      err.config = config;
      err.request = xhr;
      reject(err);
    };

    xhr.onabort = () => {
      reject(new Cancel('Request canceled'));
    };

    if (hasBody) {
      xhr.send(body);
    } else {
      xhr.send();
    }
  });

  promise.cancel = () => xhr.abort();
  return promise;
};


/**
 * Upload a file in chunks with progress and cancel support.
 *
 * @param {Object} options
 * @param {string} options.url                 - Upload endpoint
 * @param {File|Blob} options.file            - File to upload
 * @param {number} [options.chunkSize=5MB]    - Chunk size in bytes
 * @param {function} [options.onProgress]     - Global progress callback
 *     onProgress({ loaded, total, progress, chunkIndex, totalChunks })
 * @param {function} [options.onChunkProgress]- Per-chunk progress callback
 *     onChunkProgress({ loaded, total, progress, chunkIndex })
 * @param {Object} [options.headers]          - Extra headers
 * @param {string} [options.uploadId]         - Optional upload ID (for resume)
 * @returns {Promise}                         - Promise with a .cancel() method
 */
const uploadFileInChunks = ({
  url,
  file,
  chunkSize = 5 * 1024 * 1024, // 5 MB
  onProgress,
  onChunkProgress,
  headers = {},
  uploadId
}: any) => {
  if (!file) {
    throw new Error('No file provided');
  }

  const totalSize = file.size;
  const totalChunks = Math.ceil(totalSize / chunkSize);
  const finalUploadId =
    uploadId ||
    (window.crypto && crypto.randomUUID
      ? crypto.randomUUID()
      : Date.now().toString(36) + Math.random().toString(36).slice(2));

  let uploadedBytes = 0;
  let aborted = false;
  let currentXhr: any = null;

  function createChunkRequest(chunk: Blob, chunkIndex: number) {
    return new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest();
      currentXhr = xhr;

      // Build URL with query params describing the chunk
      const params = new URLSearchParams({
        uploadId: finalUploadId,
        chunkIndex: String(chunkIndex),
        totalChunks: String(totalChunks),
        fileName: file.name,
        fileSize: String(file.size)
      });

      const requestUrl = url + (url.includes('?') ? '&' : '?') + params.toString();

      xhr.open('POST', requestUrl, true);

      // Set extra headers
      Object.entries(headers).forEach(([key, value]: any) => {
        xhr.setRequestHeader(key, value);
      });

      // Per-chunk upload progress
      xhr.upload.onprogress = (event) => {
        if (!event.lengthComputable) return;
        const chunkLoaded = event.loaded;
        const chunkTotal = event.total;
        const chunkProgress = chunkLoaded / chunkTotal;

        if (typeof onChunkProgress === 'function') {
          onChunkProgress({
            loaded: chunkLoaded,
            total: chunkTotal,
            progress: chunkProgress,
            chunkIndex,
            totalChunks
          });
        }

        // Global progress: bytes before this chunk + current loaded
        const globalLoaded = uploadedBytes + chunkLoaded;
        const globalProgress = globalLoaded / totalSize;

        if (typeof onProgress === 'function') {
          onProgress({
            loaded: globalLoaded,
            total: totalSize,
            progress: globalProgress,
            chunkIndex,
            totalChunks
          });
        }
      };

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;

        // Reset currentXhr when completed
        if (currentXhr === xhr) {
          currentXhr = null;
        }

        if (xhr.status >= 200 && xhr.status < 300) {
          // This chunk is done, add its full size to uploadedBytes
          uploadedBytes += chunk.size;
          resolve(xhr.responseText);
        } else {
          const err = new Error('Chunk upload failed with status ' + xhr.status);
          (err as any).status = xhr.status;
          (err as any).responseText = xhr.responseText;
          reject(err);
        }
      };

      xhr.onerror = () => {
        if (currentXhr === xhr) {
          currentXhr = null;
        }
        reject(new Error('Network error during chunk upload'));
      };

      xhr.onabort = () => {
        if (aborted) {
          reject(new Error('Upload canceled'));
        } else {
          reject(new Error('Chunk upload aborted'));
        }
      };

      // Send the chunk as the request body
      xhr.send(chunk);
    });
  }

  const promise = (async () => {
    try {
      let lastResponse = null;

      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        if (aborted) {
          throw new Error('Upload canceled');
        }

        const start = chunkIndex * chunkSize;
        const end = Math.min(start + chunkSize, totalSize);
        const chunk = file.slice(start, end);

        lastResponse = await createChunkRequest(chunk, chunkIndex);
      }

      // All chunks uploaded
      return {
        uploadId: finalUploadId,
        response: lastResponse
      };
    } finally {
      currentXhr = null;
    }
  })();

  // Attach cancel method to the promise
  (promise as any).cancel = () => {
    aborted = true;
    if (currentXhr) {
      currentXhr.abort();
    }
  };

  return promise;
};

const isCancel = (value: any) => {
  return !!(value && value.__BBN_CANCEL__ === true);
};



const run = (method: string, url: string, config: any = {}, aborter?: any) => {
  // Optionally handle baseURL
  if (config.baseURL && !/^https?:\/\//i.test(url)) {
    url = config.baseURL.replace(/\/+$/, '') + '/' + url.replace(/^\/+/, '');
  }

  url = buildURL(url, config.params);

  const wantsUploadProgress =
    typeof config.onUploadProgress === 'function' &&
    methodsWithBody.includes(method.toUpperCase());

  if (wantsUploadProgress) {
    // Use XHR when upload progress is requested
    return xhrRequest(method, url, config, aborter);
  }
  else {
    // Default to fetch
    return fetchRequest(method, url, config, aborter);
  }
};

export default {
  isCancel,
  run
};

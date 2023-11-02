const isInViewport = function(ele: HTMLElement, fully: Boolean = false) {

  const bounding = ele.getBoundingClientRect();

  if (fully) {
    return (
      bounding.top >= 0 
      && bounding.left >= 0
      && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  const eleHeight = ele.offsetHeight;
  const eleWidth = ele.offsetWidth;
  return (
    bounding.top >= -eleHeight 
    && bounding.left >= -eleWidth
    && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + eleWidth
    && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + eleHeight
  );
};

export { isInViewport };

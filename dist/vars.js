export default {
    loggers: {
        _num: 0
    },
    /* Usable datatypes through Ajax function */
    datatypes: ['xml', 'html', 'script', 'json', 'jsonp', 'text', 'blob'],
    /* The default value used by the function shorten */
    shortenLen: 30,
    /* Categorizing keyboard map */
    keys: {
        upDown: [
            "PageUp", // 33
            "PageDown", // 34
            "End", // 35
            "Home", // 36
            "ArrowUp", // 38
            "ArrowDown" // 40
        ],
        leftRight: [
            "Home", // 36
            "End", // 35
            "ArrowLeft", // 37
            "ArrowRight" // 39
        ],
        dels: [
            "Backspace", // 8
            "Delete", // 46
            "Insert" // 45
        ],
        confirm: [
            "Enter", // 13
            "Tab" // 9
        ],
        alt: [
            "CapsLock", // 20
            "Shift", // 16
            "Control", // 17
            "Alt", // 18
            "NumLock" // 144
        ],
        numbers: [
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", // 48–57 (top row)
            "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4",
            "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9" // 96–105
        ],
        numsigns: [
            "NumpadSubtract", // 109
            "NumpadDecimal", // 110
            "-", // 189
            "." // 190
        ]
    },
    comparators: [">=", "<=", ">", "<", "="],
    operators: ["+", "-", "/", "*"],
    tags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr'],
    colors: {
        darkgrey: '#5a6a62',
        black: '#000000',
        anthracite: '#454545',
        grey: '#d3d3d3',
        white: '#ffffff',
        beige: '#fdfdfd',
        lightgrey: '#dcdcdc',
        pastelblue: '#ddebf6',
        cyan: '#00c8f8',
        blue: '#6e9ecf',
        indigo: '#3f51b5',
        navy: '#354458',
        webblue: '#2196f3',
        teal: '#009688',
        turquoise: '#1fda9a',
        pastelgreen: '#e2efda',
        palegreen: '#ccffcc',
        green: '#00a03e',
        olive: '#92b06a',
        pastelorange: '#fff2cc',
        yellow: '#fdf200',
        orange: '#ff9900',
        pink: '#eb65a0',
        purple: '#a333c8',
        red: '#db3340',
        brown: '#8c6954'
    },
    reserved: ['abstract', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'continue', 'const', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'long', /*'native', */ 'new', 'null', 'package', /*'private', 'protected', 'public', */ 'return', /*'short', 'static',*/ 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'while', 'with'],
    mockText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    regexp: {
        url: new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'),
        ip: /^((\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,
        hostname: /^[a-z\d]([a-z\d-]{0,61}[a-z\d])?(\.[a-z\d]([a-z\d-]{0,61}[a-z\d])?)*$/i,
    }
};

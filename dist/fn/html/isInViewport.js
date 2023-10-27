var isInViewport = function (ele, fully) {
    if (fully === void 0) { fully = false; }
    var bounding = ele.getBoundingClientRect();
    if (fully) {
        return (bounding.top >= 0
            && bounding.left >= 0
            && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight));
    }
    var eleHeight = ele.offsetHeight;
    var eleWidth = ele.offsetWidth;
    return (bounding.top >= -eleHeight
        && bounding.left >= -eleWidth
        && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + eleWidth
        && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + eleHeight);
};
export { isInViewport };

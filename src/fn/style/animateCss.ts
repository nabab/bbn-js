/**
 * @ignore
 * @method   animateCss
 * @todo     Add method description for animateCss
 * @global
 * @memberof bbn.fn
 * @param    {HTMLElement} ele
 * @param    {String}      animationName
 * @param    {Function}    callback
 * @returns  {*}
 */
const animateCss = function (ele, animationName, callback) {
  let animationEnd =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  /*$(ele).addClass('animated ' + animationName).one(animationEnd, function(){
        if ( typeof callback == 'function' ){ // make sure the callback is a function
          callback.call(this); // brings the scope to the callback
        }
        $(this).removeClass('animated ' + animationName);
      })*/
  ele.classList.add("animated");
  ele.classList.add(animationName);
  ele.addEventListener(animationEnd, (e) => {
    e.target.removeEventListener(e.type, arguments.callee);
    if (typeof callback == "function") {
      // make sure the callback is a function
      callback.call(this); // brings the scope to the callback
    }
    e.target.classList.remove(animationName);
  });
};

export { animateCss };

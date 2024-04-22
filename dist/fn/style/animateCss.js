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
export default function animateCss(ele, animationName, callback) {
    var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    /*$(ele).addClass('animated ' + animationName).one(animationEnd, function(){
          if ( typeof callback == 'function' ){ // make sure the callback is a function
            callback.call(this); // brings the scope to the callback
          }
          $(this).removeClass('animated ' + animationName);
        })*/
    ele.classList.add("animated");
    ele.classList.add(animationName);
    ele.addEventListener(animationEnd, function animationEndHandler(e) {
        e.target.removeEventListener(e.type, animationEndHandler);
        if (typeof callback == "function") {
            // make sure the callback is a function
            callback.call(this); // brings the scope to the callback
        }
        e.target.classList.remove(animationName);
    });
}
;

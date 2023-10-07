import { resize } from '../style/resize.js';
var toggleFullScreen = function () {
    if ('mozRequestFullScreen' in window.document.documentElement) {
        if (window.document['mozFullScreen']) {
            window.document['mozCancelFullScreen']();
        }
        else if (typeof window.document.documentElement.mozRequestFullScreen === 'function') {
            window.document.documentElement.mozRequestFullScreen();
        }
    }
    else if ('webkitRequestFullScreen' in window.document.documentElement) {
        if (window.document['webkitIsFullScreen']) {
            window.document['webkitCancelFullScreen']();
        }
        else if (typeof window.document.documentElement.webkitRequestFullScreen === 'function') {
            window.document.documentElement.webkitRequestFullScreen();
        }
    }
    else if ('msRequestFullScreen' in window.document.documentElement) {
        if (window.document['msFullscreenEnabled']) {
            window.document['msExitFullscreen']();
        }
        else if (typeof window.document.documentElement.msRequestFullScreen === 'function') {
            window.document.documentElement.msRequestFullScreen();
        }
    }
    else if ('requestFullscreen' in window.document) {
        if (window.document.fullscreenEnabled) {
            window.document.exitFullscreen();
        }
        else {
            window.document.documentElement.requestFullscreen();
        }
    }
    setTimeout(function () {
        resize();
    }, 0);
};
export { toggleFullScreen };

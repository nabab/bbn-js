var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Yields execution to the browser to allow it to process pending UI updates.
 * Uses `window.scheduler.yield()` if available, otherwise falls back to `requestAnimationFrame`.
 * @method   yieldToBrowser
 * @global
 * @example
 * ``` javascript
 * await bbn.fn.yieldToBrowser();
 * ```
 * @memberof bbn.fn
 * @returns  {Promise}
 */
export default function yieldToBrowser() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        if ((_a = window.scheduler) === null || _a === void 0 ? void 0 : _a.yield) {
            yield window.scheduler.yield(); // cooperative yield
        }
        else {
            yield new Promise(requestAnimationFrame);
        }
    });
}
;

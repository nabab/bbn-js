var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import yieldToBrowser from './yieldToBrowser.js';
/**
 * Executes a function on each element of an array slowly, yielding to the browser in between.
 * @param arr The array to iterate over.
 * @param fn The function to execute on each element. If the function returns false, the iteration stops.
 * @returns A promise that resolves to true if the iteration completed, or false if it was stopped early.
 */
export default function executeSlowly(arr, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < arr.length; i++) {
            yield yieldToBrowser();
            let res = fn(arr[i], i);
            if (res instanceof Promise) {
                res = yield res;
            }
            if (res === false) {
                return false;
            }
        }
        return true;
    });
}

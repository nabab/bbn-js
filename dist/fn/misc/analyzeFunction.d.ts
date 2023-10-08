/**
 * Analyzes the given function and extracts details about its structure.
 *
 * @function analyzeFunction
 * @param {Function} fn - The function to analyze.
 * @returns {Object} An object containing details about the function.
 * @throws {Error} When unexpected syntax is encountered while parsing.
 */
declare const analyzeFunction: (fn: any) => {
    body: any;
    args: any[];
    argString: string;
    isArrow: boolean;
    hasFunction: boolean;
    name: string;
    isAsync: boolean;
    hash: string;
    returnType: string;
};
export { analyzeFunction };

import { md5 } from "../string/md5.js";
import { log } from "../browser/log.js";

/**
 * Analyzes the given function and extracts details about its structure.
 *
 * @function analyzeFunction
 * @param {Function} fn - The function to analyze.
 * @returns {Object} An object containing details about the function.
 * @throws {Error} When unexpected syntax is encountered while parsing.
 */
const analyzeFunction = function (fn) {
  const all = typeof fn === "function" ? fn.toString() : fn;
  if (typeof all !== "string") {
    throw Error("Unexpected type " + typeof fn + " while parsing function");
  }
  log("INSIDE ANALYZE FUNCTION", all);

  let exp = "";
  let isArrow = false;
  let isAsync = false;
  let hasFunction = false;
  let name = "";
  let parOpened = 0;
  let parClosed = 0;
  let args = [];
  let currentArg = {};
  let body;
  let currentQuote = "";
  let escapable = ['"', "'", "`"];
  let isEscaped = false;
  let settingDefault = false;
  let isComment = false;
  let isCommentLine = false;
  let isDestructuring = false;

  for (let i = 0; i < all.length; i++) {
    // Handle string literals
    if (!isComment && all[i] === "/" && all[i + 1] === "*") {
      isComment = true;
      exp = "";
    } else if (all[i] === "*" && all[i + 1] === "/") {
      isComment = false;
    } else if (!isCommentLine && all[i] === "/" && all[i + 1] === "/") {
      isCommentLine = true;
      exp = "";
    } else if (all[i] === "\n") {
      isCommentLine = false;
    } else if (isComment || isCommentLine) {
      continue;
    } else if (all[i] === currentQuote && !isEscaped && currentQuote) {
      currentQuote = "";
      exp += all[i];
    } else if (currentQuote) {
      isEscaped = all[i] === "\\" && !isEscaped;
      exp += all[i];
    } else if (escapable.includes(all[i]) && !isEscaped) {
      currentQuote = all[i];
      exp += all[i];
    } else if (all[i] === "(") {
      parOpened++;
      if (exp.trim() !== "") {
        if (exp.trim() === "function") {
          hasFunction = true;
        }
        else if (exp.trim() !== "async") {
          name = exp.trim();
        }
        exp = "";
      }
    } else if (all[i] === ")") {
      if (parOpened === parClosed + 1) {
        if (settingDefault) {
          currentArg["default"] = exp.trim();
          settingDefault = false;
        } else if (exp) {
          currentArg["name"] = exp.trim();
        }
        if (currentArg["name"] || currentArg["default"]) {
          args.push(currentArg);
          currentArg = {};
        }
        exp = "";
      }
      parClosed++;
    } else if (all[i] === "=" && all[i + 1] === ">") {
      if (exp.trim() !== "" && parOpened === parClosed) {
        currentArg["name"] = exp.trim();
        args.push(currentArg);
        currentArg = {};
        exp = "";
      }
      isArrow = true;
      i++;
      continue;
    } else if (all[i] === "=" && parOpened > parClosed && !settingDefault) {
      currentArg["name"] = exp.trim();
      exp = "";
      settingDefault = true;
    } else if (all[i] === ",") {
			if (isDestructuring) {
				exp += all[i];
			}
      else if (parOpened > parClosed) {
        if (settingDefault) {
          currentArg["default"] = exp.trim();
          settingDefault = false;
        } else if (exp) {
          currentArg["name"] = exp.trim();
        }
        if (currentArg["name"] || currentArg["default"]) {
          args.push(currentArg);
          currentArg = {};
        }
        exp = "";
      } else {
        throw Error("Unexpected ',' while parsing function");
      }
    } else if (all[i] === "{" || all[i] === "}") {
      if (parOpened === parClosed) {
        body = all.substring(i).trim();
        break;
      } else {
        if (parOpened > parClosed) {
          if (all[i] === "{" && !isDestructuring) {
            isDestructuring = true;
          } else if (all[i] === "}" && isDestructuring) {
            isDestructuring = false;
          }
        }
				else {
					exp = "";
				}
      }
    } else if (isArrow) {
      body = all.substring(all.indexOf("=>") + 2).trim();
      break;
    } else if (all[i] === " ") {
      if (exp.trim() !== "") {
        if (exp.trim() === "async") {
          isAsync = true;
        }

        exp = "";
      }
    } else {
      exp += all[i];
    }
  }

  if (!body) {
    if (isArrow) {
      body = exp;
    } else {
      throw Error("Unexpected end of function while parsing function");
    }
  }

  const argString = args
    .map((arg) => arg.name + (arg.default ? " = " + arg.default : ""))
    .join(", ");
  const hash = md5(
    body + (name ? "-" + name : "") + (argString ? "-" + argString : "")
  );

  return {
    body,
    args,
    argString,
    isArrow,
    hasFunction,
    name,
    isAsync,
    hash,
  };
};

export { analyzeFunction };

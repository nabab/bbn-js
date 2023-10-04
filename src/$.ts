const $ = (selector, context) => {
  if (context?.querySelectorAll) {
    return context.querySelectorAll(selector);
  }
  return document.body.querySelectorAll(selector);
};

export {$};


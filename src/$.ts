const $ = (selector, context) => {
  if (context?.querySelectorAll) {
    return context.querySelectorAll(selector);
  }

  if (context) {
    throw new Error('Invalid context');
  }

  return document.body.querySelectorAll(selector);
};

export {$};


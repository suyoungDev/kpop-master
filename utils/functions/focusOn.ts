export const focusOn = (query: string, node?: HTMLElement): void => {
  if (node) (node.querySelectorAll(query)[0] as HTMLInputElement).focus();
  else (document.querySelectorAll(query)[0] as HTMLInputElement).focus();
  return;
};

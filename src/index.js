function titleCaseLetter(letter) {
  return letter.toUpperCase();
}

export function isString(input) {
  return typeof input === 'string' || input instanceof String
}

export function toTitleCase(input, useRules = false) {
  if (!isString(input)) return input;
  else if (useRules) {
    return input.replace(/((?:^|\.)\W|\b(?!(?:a|at|by|in|of|out|on|en|re|vs|bar|mid|per|pro|qua|til|amid|anti|atop|down|less|like|near|over|up|to|but|for|off|out|via|other|from|ll|ve|re|into|unto|with|for|and|nor|but|or|v|yet|so|t|s)\b)\w)/g,
      titleCaseLetter);
  } else {
    return input.replace(/((:^)\w|\b)\w/g,
      titleCaseLetter);
  }
}

export function removeSpaces(input, includeNewLines=true){
  if (!isString(input)) return input;
  return includeNewLines ? input.replace(/\s/g, '') : input.replace(/\h/g, '');
}
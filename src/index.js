function titleCaseLetter(letter) {
  return letter.toUpperCase();
}

function isString(input) {
  return typeof input === 'string' || input instanceof String
}

function toTitleCase(input, useRules = false) {
  if (!isString(input)) return input;
  else if (useRules) {
    return input.replace(/((?:^|\.)\W|\b(?!(?:a|at|by|the|in|of|out|on|en|re|vs|bar|mid|per|pro|qua|til|amid|anti|atop|down|less|like|near|over|up|to|but|for|off|out|via|other|from|ll|ve|re|into|unto|with|for|and|nor|but|or|v|yet|so|t|s)\b)\w)/g,
      titleCaseLetter);
  } else {
    return input.replace(/((:^)\w|\b)\w/g,
      titleCaseLetter);
  }
}

function removeSpaces(input, removeNewLines=true){
  if (!isString(input)) return input;
  return removeNewLines ? input.replace(/\s/g, '') : input.replace(/(?:(?!\n)\s)/g, '');
}

module.exports = {
  toTitleCase, isString, removeSpaces
}
export let defaultExcludedWords = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'in', 'of']);
export let customExcludedWords = new Set();

export function setDefault(...words) {
  defaultExcludedWords = new Set([...defaultExcludedWords, ...words.map(word => word.toLowerCase())]);
}

export function setCustom(...words) {
  customExcludedWords = new Set([...words.map(word => word.toLowerCase())]);
}

export function delDefault(...words) {
  words.forEach(word => defaultExcludedWords.delete(word.toLowerCase()));
}

export function delCustom(...words) {
  words.forEach(word => customExcludedWords.delete(word.toLowerCase()));
}

export function moveDefaultToCustom(word) {
  if (defaultExcludedWords.has(word.toLowerCase())) {
      customExcludedWords.add(word.toLowerCase());
    defaultExcludedWords.delete(word.toLowerCase());
  }
}

export function moveCustomToDefault(word) {
  if (customExcludedWords.has(word.toLowerCase())) {
      defaultExcludedWords.add(word.toLowerCase());
    customExcludedWords.delete(word.toLowerCase());
  }
}
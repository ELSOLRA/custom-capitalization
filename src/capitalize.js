import { defaultExcludedWords, customExcludedWords } from './excludedWords.js';

export function capitalize(sentence, useDefault, useCustom) {
    const excludedWords = new Set();
  
    if (useDefault && !useCustom) {
      defaultExcludedWords.forEach(word => excludedWords.add(word.toLowerCase()));
    } else if (!useDefault && useCustom) {
      customExcludedWords.forEach(word => excludedWords.add(word.toLowerCase()));
    } else if (useDefault && useCustom) {
      defaultExcludedWords.forEach(word => excludedWords.add(word.toLowerCase()));
      customExcludedWords.forEach(word => excludedWords.add(word.toLowerCase()));
    }
  
    return sentence.split(' ').map((word, index) => {
      if (index === 0 || !excludedWords.has(word.toLowerCase())) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    }).join(' ');
  }
  
export function capitalizeAllWords(sentence) {
    return sentence.split(' ').map(word => word.toUpperCase()).join(' ');
  }
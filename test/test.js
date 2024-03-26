import { setDefault, setCustom, delDefault, delCustom, moveDefaultToCustom, moveCustomToDefault, capitalize, capitalizeAllWords, defaultExcludedWords, customExcludedWords } from '../src/index.js';


// Testing setDefault function
console.log("setDefault function:");
setDefault('test', 'word', 'example');
console.log("Default words after setDefault:", defaultExcludedWords);

// Testing setCustom function
console.log("setCustom function:");
setCustom('custom', 'excluded', 'words');
console.log("Custom words after setCustom:", customExcludedWords);

// Testing delDefault function
console.log("delDefault function:");
delDefault('test', 'word');
console.log("Default words after delDefault:", defaultExcludedWords);

// Testing delCustom function
console.log("delCustom function:");
delCustom('custom', 'excluded');
console.log("Custom words after delCustom:", customExcludedWords);

// Testing moveDefaultToCustom function
console.log("moveDefaultToCustom function:");
moveDefaultToCustom('example');
console.log("Default words after moveDefaultToCustom:", defaultExcludedWords);
console.log("Custom words after moveDefaultToCustom:", customExcludedWords);

// Testing moveCustomToDefault function
console.log("moveCustomToDefault function:");
moveCustomToDefault('excluded');
console.log("Default words after moveCustomToDefault:", defaultExcludedWords);
console.log("Custom words after moveCustomToDefault:", customExcludedWords);

// Testing capitalize function
console.log("capitalize function:");
console.log("Capitalized sentence:", capitalize('this is a test sentence', true, true));

// Testing capitalizeAllWords function
console.log("capitalizeAllWords function:");
console.log("Capitalized all words:", capitalizeAllWords('this is a test sentence'));


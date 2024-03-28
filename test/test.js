import customCapitalization from '../src/index.js'

// Testing setDefault function
console.log("setDefault function:");
customCapitalization.setDefault('test', 'word', 'example');
console.log("Default words after setDefault:", customCapitalization.defaultExcludedWords);

// Testing setCustom function
console.log("setCustom function:");
customCapitalization.setCustom('custom', 'excluded', 'words');
console.log("Custom words after setCustom:", customCapitalization.customExcludedWords);

// Testing delDefault function
console.log("delDefault function:");
customCapitalization.delDefault('test', 'word');
console.log("Default words after delDefault:", customCapitalization.defaultExcludedWords);

// Testing delCustom function
console.log("delCustom function:");
customCapitalization.delCustom('custom', 'excluded');
console.log("Custom words after delCustom:", customCapitalization.customExcludedWords);

// Testing moveDefaultToCustom function
console.log("moveDefaultToCustom function:");
customCapitalization.moveDefaultToCustom('example');
console.log("Default words after moveDefaultToCustom:", customCapitalization.defaultExcludedWords);
console.log("Custom words after moveDefaultToCustom:", customCapitalization.customExcludedWords);

// Testing moveCustomToDefault function
console.log("moveCustomToDefault function:");
customCapitalization.moveCustomToDefault('excluded');
console.log("Default words after moveCustomToDefault:", customCapitalization.defaultExcludedWords);
console.log("Custom words after moveCustomToDefault:", customCapitalization.customExcludedWords);

// Testing capitalize function
console.log("capitalize function:");
console.log("Capitalized sentence:", customCapitalization.capitalize('this is a test sentence', true, true));

// Testing capitalizeAllWords function
console.log("capitalizeAllWords function:");
console.log("Capitalized all words:", customCapitalization.capitalizeAllWords('this is a test sentence'));


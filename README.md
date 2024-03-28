# Custom-Capitalization

[![NPM Version](https://img.shields.io/npm/v/custom-capitalization)](https://www.npmjs.com/package/custom-capitalization)
[![NPM License](https://img.shields.io/npm/l/custom-capitalization)](https://www.npmjs.com/package/custom-capitalization)

Custom-Capitalization is a JavaScript library that provides functions for capitalizing words in a sentence with customizable excluded words. It offers an easy-to-use interface for developers to capitalize sentences while excluding specific words from capitalization.

## Features

- **Sentence Capitalization**: Capitalize words in a sentence while preserving the capitalization of specific words.
- **Customizable Exclusion**: Set default excluded words and add custom excluded words to control which words should not be capitalized.
- **Dynamic Exclusion Management**: Easily add, remove, and move words between default and custom excluded word lists.
- **Flexible Usage**: Use individual functions for setting excluded words, or directly capitalize sentences with customizable exclusion rules.


## Changelog

### Version 1.0.2 (March 28, 2024)

- Updated import syntax for easier usage:
  - Previously: `import { setDefault, setCustom, delDefault, delCustom, moveDefaultToCustom, moveCustomToDefault, capitalize, capitalizeAllWords, defaultExcludedWords, customExcludedWords } from 'custom-capitalization';`
  - Now: `import customCapitalization from 'custom-capitalization';`

### Version 1.0.1 (March 27, 2024)

- Corrected the path to the main file in package.json

### Version 1.0.0 (March 26, 2024)

- Initial release of Custom-Capitalization.

## Installation

To install Custom-Capitalization, you can use npm:

```sh
npm install custom-capitalization

```

## Usage

### Basic Usage

```javascript
import customCapitalization from 'custom-capitalization';

console.log(customCapitalization.capitalize('that quick brown fox jumps over the lazy dog in the park', true, true)); // Output: That Quick Brown Fox Jumps Over the Lazy Dog in the Park

console.log(customCapitalization.capitalizeAllWords('that quick brown fox jumps over the lazy dog in the park')); // Output: THAT QUICK BROWN FOX JUMPS OVER THE LAZY DOG IN THE PARK
```

### Excluding Words

```javascript
import customCapitalization from 'custom-capitalization';

customCapitalization.setDefault('that', 'over');
customCapitalization.setCustom('dog','fox');

console.log(customCapitalization.capitalize('that quick brown fox jumps over the lazy dog in the park', true, true)); // Output: That Quick Brown fox Jumps over the Lazy dog in the Park
```

### Removing and Moving Words

```javascript
import customCapitalization from 'custom-capitalization';

customCapitalization.setCustom('dog','fox');

customCapitalization.delDefault('in', 'the');
customCapitalization.delCustom('fox');

customCapitalization.moveDefaultToCustom('that');
customCapitalization.moveCustomToDefault('dog');

console.log(customCapitalization.capitalize('That quick brown fox jumps over the lazy dog in the park with joy', true, true)); // Output: That Quick Brown Fox Jumps Over The Lazy dog In The Park With Joy
```

## Default Excluded Words

The `defaultExcludedWords` variable contains a set of words that are excluded from capitalization by default. These words are commonly used as articles, conjunctions, and prepositions that are typically not capitalized in sentences.

### Current Default Excluded Words

- a
- an
- the
- and
- but
- or
- for
- nor
- on
- at
- to
- by
- in
- of

These words can be removed from the default excluded list using the `delDefault` function provided by the library.

## License

This project is licensed under the ISC License - see the [LICENSE.md](License.md) file for details.
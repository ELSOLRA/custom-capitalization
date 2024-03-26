# Custom-Capitalization

Custom-Capitalization is a JavaScript library that provides functions for capitalizing words in a sentence with customizable excluded words. It offers an easy-to-use interface for developers to capitalize sentences while excluding specific words from capitalization.

## Features

- **Sentence Capitalization**: Capitalize words in a sentence while preserving the capitalization of specific words.
- **Customizable Exclusion**: Set default excluded words and add custom excluded words to control which words should not be capitalized.
- **Dynamic Exclusion Management**: Easily add, remove, and move words between default and custom excluded word lists.
- **Flexible Usage**: Use individual functions for setting excluded words, or directly capitalize sentences with customizable exclusion rules.

## Installation

To install Custom-Capitalization, you can use npm:

```sh
npm install custom-capitalization

```

## Usage

### Basic Usage

```javascript
import { capitalize, capitalizeAllWords } from 'custom-capitalization';

console.log(capitalize('that quick brown fox jumps over the lazy dog in the park', true, true)); // Output: That Quick Brown Fox Jumps Over the Lazy Dog in the Park

console.log(capitalizeAllWords('that quick brown fox jumps over the lazy dog in the park')); // Output: TTHAT QUICK BROWN FOX JUMPS OVER THE LAZY DOG IN THE PARK
```

### Excluding Words

```javascript
import { setDefault, setCustom, capitalize } from 'custom-capitalization';

setDefault('that', 'over');
setCustom('dog','fox');

console.log(capitalize('that quick brown fox jumps over the lazy dog in the park', true, true)); // Output: That Quick Brown fox Jumps over the Lazy dog in the Park
```

### Removing and Moving Words

```javascript
import { setCustom, delDefault, delCustom, moveDefaultToCustom, moveCustomToDefault, capitalize } from 'custom-capitalization';

setCustom('dog','fox');

delDefault('in', 'the');
delCustom('fox');

moveDefaultToCustom('that');
moveCustomToDefault('dog');

console.log(capitalize('That quick brown fox jumps over the lazy dog in the park with joy', true, true)); // Output: That Quick Brown Fox Jumps Over The Lazy dog In The Park With Joy
```

## Default Excluded Words

The `defaultExcludedWords` variable contains a set of words that are excluded from capitalization by default. These words are commonly used articles, conjunctions, and prepositions that are typically not capitalized in sentences.

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
import * as capitalizeFunctions from './capitalize.js';
import * as excludedWordsFunctions from './excludedWords.js';

const customCapitalization = {
    ...capitalizeFunctions,
    ...excludedWordsFunctions,
  };
  
export default customCapitalization;
let word = 'Арнольд';
let result = '';

for (let letter of word) {
  let lowerLetter = letter.toLowerCase();
  if (lowerLetter !== 'а' && lowerLetter !== 'о') {
    result += letter;
  }
}

console.log(result);
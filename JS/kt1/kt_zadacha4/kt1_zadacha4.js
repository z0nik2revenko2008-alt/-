let word = prompt('Введите строкове значение: ');
let wordLength = word.length;
let sqrt = Math.sqrt(wordLength);
let result = sqrt === Math.floor(sqrt) ? 1 : 0;

console.log(result);
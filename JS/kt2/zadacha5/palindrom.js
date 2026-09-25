let word = prompt("Введите слово");
let reversedWord = word.split('').reverse().join('');

if (word === reversedWord) {
  console.log('YES');
} else {
  console.log('NO');
}
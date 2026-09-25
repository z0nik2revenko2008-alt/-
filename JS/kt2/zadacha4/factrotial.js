let num = 4;
let totalSum = 0;
let currentFactorial = 1;

for (let i = 1; i <= num; i++) {
  currentFactorial *= i;
  totalSum += currentFactorial;
}

console.log(totalSum);
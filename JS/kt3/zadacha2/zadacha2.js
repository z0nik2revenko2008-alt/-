function changeElem(array, n) {
    // Создаем новый массив, умножая каждый элемент на n
    return array.map(element => element * n);
}

let array = [1, 2, 3, 4];
let result = changeElem(array, 3);
console.log(result); // [3, 6, 9, 12]
console.log(array);   // [1, 2, 3, 4] (исходный массив не изменился)
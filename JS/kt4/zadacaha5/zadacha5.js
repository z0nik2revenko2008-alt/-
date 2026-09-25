function generateArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object' && !Array.isArray(array[i]) && array[i] !== null) {
            // Если элемент - объект (но не массив и не null), преобразуем его в массив значений
            array[i] = Object.values(array[i]);
        }
    }
    return array;
}

let array = [[1], {id: 40}, [100], [300], {part: 10}];
console.log(generateArray(array)); // [[1], [40], [100], [300], [10]]
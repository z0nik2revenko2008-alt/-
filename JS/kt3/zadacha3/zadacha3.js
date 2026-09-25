function sumElems(array) {
    return array.reduce((sum, elem) => {
        const num = Number(elem); // Пытаемся преобразовать строку в число
        if (!isNaN(num)) {        // Если преобразование успешно (не NaN)
            return sum + num;     // Добавляем к сумме
        }
        return sum;               // Иначе оставляем сумму без изменений
    }, 0);                        // Начальное значение суммы = 0
}

let array = ['10', 'Строка', '5g', '15', '05'];
let result = sumElems(array);
console.log(result); 
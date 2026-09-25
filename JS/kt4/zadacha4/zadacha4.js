function сheckObj(obj) {
    return 'particle' in obj;
}

console.log(сheckObj({id: 1, particle: 10})); // true
console.log(сheckObj({id: 2, name: "tag"})); // false
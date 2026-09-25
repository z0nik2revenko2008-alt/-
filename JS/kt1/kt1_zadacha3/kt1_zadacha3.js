let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите второе число"));
let sign = prompt("Введите операцию +,-,*,/");
if (sign === '+'){
    alert(a + b)  
}
else if (sign === '-'){
    alert(a - b)
}
else if (sign === '*'){
    alert(a * b)
}
else if (sign === '/'){
    if (b === 0) 
        alert("на ноль делить нельзя");
    }
     else{
        alert(a / b);
    }
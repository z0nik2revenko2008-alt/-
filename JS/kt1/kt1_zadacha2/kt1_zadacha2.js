let temp = Number(prompt("Введите число: от 10 до 30 "));
let weather = prompt("Введите значение: clear/cloudy");
let activity = 0;
if(temp <= 25 && weather == "clear"){
    activity = "golf"
}else if(temp <= 10 && temp <= 24 && weather == "cloudy"){
    activity = "bowling"
}else if(temp > 10  && weather == null){
    activity = "hiking"
}
alert(activity);
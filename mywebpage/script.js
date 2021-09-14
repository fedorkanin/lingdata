let age_string = document.getElementById("age_string");
var time = new Date();

let cur_day;
let cur_hour;
let cur_month;
let cur_year;

cur_hour = time.getHours() - 1; //наверное 1
cur_day = time.getDate() - 15;
cur_month = time.getMonth() - 1;
cur_year = time.getFullYear() - 2004;

let age = [cur_hour, cur_day, cur_month, cur_year];
let min = ["минута", "минуты", "минут"];
let hr = ["час", "часа", "часов"];
let day = ["день", "дня", "дней"];
let mon = ["месяц", "месяца", "месяцев"];
let year = ["год", "года", "лет"];

for (let i = 1; i < age.length; i++) {
    if (age[i - 1] < 0) {
        age[i - 1] = 0;
        age[i] -= 1;
    }
}

function WordCase(num, arr) {
    console.log(num)
    console.log(arr)
    if (num % 10 == 1 && num != 11) {
        return num + ' ' + arr[0] + ' ';
    }
    else if (num % 10 > 1 && num % 10 < 5) {
        return num + ' ' + arr[1] + ' ';
    }
    else {
        return num + ' ' + arr[2] + ' ';
    }
}

age_string.innerHTML = "Мне " + WordCase(age[3], year) + WordCase(age[2], mon) + WordCase(age[1], day) + 'и ' + WordCase(age[0], hr);

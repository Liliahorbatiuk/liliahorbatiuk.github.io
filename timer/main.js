// Поточна дата
let today = new Date();
let day = today.getDate()
let month = today.getMonth();
let year = today.getFullYear()
let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
document.querySelector('.date').innerHTML = `${day}.${months[month]}.${year}`

// Поточний час
setInterval(function () {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;

    document.querySelector('.time').innerHTML = `${hour}:${minute}:${second}`
}, 1000);

'use strict'
// Секундомір
let hour = 0;
let min = 0;
let sec = 0;

let start = document.querySelector('#startBtn');
let stoped = document.querySelector('#stopBtn')
let loop = document.querySelector('#loopBtn')
let reset = document.querySelector('#resetBtn')

document.querySelector('.numbers').innerHTML = `${'0' + hour}:${'0' + min}:${'0' + sec}`;

// Старт секундоміра 
function clock() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = 0;
    }
    if (min >= 60) {
        hour++;
        min = 0;
    }
    interval = setTimeout(clock, 1000)
    if (hour < 10) hour = '0' + +hour;
    if (min < 10) min = '0' + +min;
    if (sec < 10) sec = '0' + +sec;

    document.querySelector('.numbers').innerHTML = `${hour}:${min}:${sec}`;
}
start.onclick = function () {
    clock()
}

// Зупинка секундоміра
let interval = 0
stoped.onclick = function () {
    clearTimeout(interval)
}

// Скидання значення 
reset.onclick = function () {
    document.querySelector('.numbers').innerHTML = '00:00:00';
    scoreboard.innerHTML = ''
    hour = 0;
    min = 0;
    sec = 0;
    ms = 0;
}

// Вивід значення на екран 
let scoreboard = document.querySelector('#textarea');
loop.onclick = function () {
    scoreboard.innerHTML += `${document.querySelector('.numbers').textContent}\n`;
}


// Таймер

let ts = 59;
let tm = document.querySelector('#min-inp');
let timerMinutes = parseInt(`${tm}:${ts}`);


document.querySelector('#more').addEventListener('click', function () {
    tm.value++
    if(tm.value<10){
        tm.value = '0' + +tm.value
    }
})
document.querySelector('#less').addEventListener('click', function () {
    tm.value--
    if (tm.value <= 0) {
        tm.value = 0
    }
    if(tm.value<10){
        tm.value = '0' + +tm.value
    }
})


let startBtn = document.querySelector('#start')
let timerScore = document.querySelector('.timerScore');
let tmMin = 0;
let tmSec = 0;
let firstStart = true
timerScore.innerHTML = `00:00`

startBtn.onclick = function () {
    if(firstStart){
        tmMin = +document.querySelector('#min-inp').value
        startTimer();
        firstStart = false
    }
    else{
        startTimer();
    }
}

// Старт таймера
function startTimer() {
    tmSec--
    if (tmSec == 0 && tmMin==0) {
        clearTimeout(time);
        timerScore.innerHTML = `00:00`
        return
    }
    if (tmSec < 0) {
        tmSec = 59
        tmMin--
    }
    if (tmSec < 10) {
        tmSec = '0' + +tmSec
    }
    if (tmMin < 10) {
        tmMin = '0' + +tmMin
    }
    time = setTimeout(startTimer, 1000)
    timerScore.innerHTML = `${tmMin}:${tmSec}`
}

// Зупинка таймеру
let stopBtn = document.querySelector('#stop')
stopBtn.onclick = function () {
    clearTimeout(time)
}
// Скидання 
resetTimer = document.querySelector('#reset');
resetTimer.onclick = function () {
    timerScore.innerHTML = '00:00'
    tmMin = 0;
    tmSec = 0
    clearTimeout(time)
    firstStart = true
}
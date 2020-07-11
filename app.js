document.getElementById("btn2").disabled = true;
document.getElementById("btn3").disabled = true;

var msec = 0;
var sec = 0;
var min = 0;
var milisec = document.getElementById("msec")
var second = document.getElementById("sec")
var minute = document.getElementById("min")
function timer() {
    msec ++;
    milisec.innerHTML = msec;
    if (msec >= 100) {
        sec ++;
        second.innerHTML = sec;
        msec = 0;
    } else if (sec >= 60) {
        min ++;
        minute.innerHTML = min;
        sec = 0;
    }
}

var interval;

function start() {
    interval = setInterval(timer, 10);
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = false;    
    document.getElementById("btn3").disabled = false;    
}

function pause() {
    clearInterval(interval);
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;
}

function reset() {
    msec = 0;
    sec = 0;
    min = 0;
    milisec.innerHTML = msec;
    second.innerHTML = sec;
    minute.innerHTML = min;
    document.getElementById("btn3").disabled = true;
    pause();
}

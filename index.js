let timerId = []; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId.push(setInterval(updateClock, 1000));
    // запускаем  updateClock() каждую секунду
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    timerId.map(el=> clearInterval(timerId[el]))
    for (let i = 0; i<timerId.length; i++) {
        clearInterval(timerId[i])
    } timerId.length = 0

    // clearInterval(timerId.pop()); // останавливаем таймер
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

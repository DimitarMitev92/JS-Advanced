function attachEventsListeners() {
    let daysInp = document.getElementById('days');
    let hoursInp = document.getElementById('hours');
    let minutesInp = document.getElementById('minutes');
    let secondsInp = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', daysFnc);
    hoursBtn.addEventListener('click', hoursFnc);
    minutesBtn.addEventListener('click', minutesFnc);
    secondsBtn.addEventListener('click', secondsFnc);

    function daysFnc() {
        let currentDays = Number(daysInp.value);
        hoursInp.value = currentDays * 24;
        minutesInp.value = currentDays * 1440;
        secondsInp.value = currentDays * 86400;
    }

    function hoursFnc() {
        let currentHours = Number(hoursInp.value);
        daysInp.value = currentHours / 24;
        minutesInp.value = currentHours * 60;
        secondsInp.value = currentHours * 3600;
    }

    function minutesFnc() {
        let currentMinutes = Number(minutesInp.value);
        daysInp.value = currentMinutes / 1440;
        hoursInp.value = currentMinutes / 60;
        secondsInp.value = currentMinutes * 60;
    }

    function secondsFnc() {
        let currentSeconds = Number(secondsInp.value);
        daysInp.value = currentSeconds / 86400;
        hoursInp.value = currentSeconds / 3600
        minutesInp.value = currentSeconds / 60;
    }
}
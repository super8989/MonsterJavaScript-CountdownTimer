const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('.clock');

endDate.addEventListener('change', function (e) {
    e.preventDefault();

    const temp = new Date(endDate.value);

    startClock(temp);
})

function startClock(d) {
    let tl = timeLeft(d);

    for (let prop in tl) {
        console.log(prop, tl[prop]);
        let el = document.querySelector('.'+prop)
        console.log(el);

        if(el) {
            console.log(el);
            el.innerHTML = tl[prop];
        }
    }

    // clock.innerHTML = tl.days + ' ' + tl.hours;
}

function timeLeft(d) {
    let currentDate = new Date();
    // console.log(Date.parse(d));
    // console.log(currentDate);
    // console.log(Date.parse(currentDate));

    let t = Date.parse(d) - Date.parse(currentDate);
    // console.log(t);

    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,

    };
}
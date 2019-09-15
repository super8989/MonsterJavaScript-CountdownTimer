const endDate = document.querySelector('input[name="endDate"]');
const clock = document.querySelector('.clock');

endDate.addEventListener('change', function(e) {
    e.preventDefault();
    console.log(endDate.value);

    const temp = new Date(endDate.value);
    console.log(temp);

    startClock(temp);
})

function startClock(d) {
    console.log(d);
}

function timeLeft(d) {
    
}


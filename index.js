let hr = document.getElementById('Hour');
let min = document.getElementById('Min'); // Variable name should be 'min'
let sec = document.getElementById('Sec');

function displayTime(){
    let date = new Date();

    // Getting hour, minute, sec from date
    let hh = date.getHours(); // Method name should be getHours()
    let mm = date.getMinutes(); // Method name should be getMinutes()
    let ss = date.getSeconds(); // Method name should be getSeconds()

    let hrotation = 30 * hh + mm / 2;
    let mrotation = 6 * mm;
    let srotation = 6 * ss;

    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}

setInterval(displayTime, 1000);

function Timer() {
    var countDownDate = new Date("Mar 14, 2023 20:34:10").getTime()
    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h "
    document.getElementById("mins").innerHTML = minutes + "m "
    document.getElementById("secs").innerHTML = seconds + "s"

    if (timeleft < 0) {
        document.getElementById("days").innerHTML = "T"
        document.getElementById("hours").innerHTML = "I"
        document.getElementById("mins").innerHTML = "M"
        document.getElementById("secs").innerHTML = "E"
    }
}

setInterval(function () {
    Timer()
}, 1000)



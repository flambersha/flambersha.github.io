const kursachCountDown = new Date("Nov 29, 2021 00:00:00").getTime();

var x = setInterval(() => {
    
    var now = new Date().getTime();
    var distance = kursachCountDown - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    document.getElementById("clock").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds +"s";

}, 1000);

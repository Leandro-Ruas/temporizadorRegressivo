function startTimer(duration, display) {

    var timer = duration,horas,minutes,seconds;

    setInterval(function() {
        horas   = parseInt(timer / 3600, 10);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60,10);

        horas   = horas   < 10 ? "0" + horas   : horas;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = horas + ":" + minutes + ":" + seconds;

        if (--timer < 0){
            timer = duration;
        }

    }, 1000);

}

window.onload = function() {

    var duration = 60 * 60; // conversão para segundos
    var display = document.querySelector("#timer"); //Elemento para exibir o timer

    startTimer(duration, display); //Inicia a função
}
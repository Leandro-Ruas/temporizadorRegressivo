function startTimer(duration, display, msg) {

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

        if(minutes < 1) {

            msg.textContent = "Daremos iniciou ao nosso culto dentro de instantes.";
    
        }
        
        if(minutes < 1 && seconds < 30) {

            msg.textContent = "Pedimos para aos amados irmãos tomem seus lugares, pois daremos inicio ao nosso culto";

        }

        
    if (timer == 0){
        window.close();
    }

    }, 1000);

}

window.onload = function() {

    var duration = 60 * 1; // conversão para segundos
    var display  = document.querySelector("#timer"); //Elemento para exibir o timer
    var msg      = document.querySelector("#msg");

    startTimer(duration, display,msg); //Inicia a função

}


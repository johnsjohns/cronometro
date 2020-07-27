let minuto = 0;
let segundo = 0;
let hora = 0;
let contar;


function carregar() {
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = pare;
    document.getElementById("clear").onclick = limpar;
}

function pare() {
    var verificar = document.getElementById("cronometro").checked;
    if(verificar){
        document.getElementById("start").onclick = start;
    } else {
        document.getElementById("start").onclick = startTimer;
    }
    document.getElementById("cronometro").disabled = false;
    document.getElementById("timer").disabled = false;
    clearInterval(contar);
}

function start() {
    document.getElementById("start").onclick = null;
    document.getElementById("cronometro").disabled = true;
    document.getElementById("timer").disabled = true;
    contar = setInterval(cronometrar, 1000);

}

function startTimer(){
    document.getElementById("start").onclick = null;
    document.getElementById("cronometro").disabled = true;
    document.getElementById("timer").disabled = true;
    contar = setInterval(timerStart, 1000);
}

function limpar(){
    minuto = 0;
    segundo = 0;
    hora = 0;
    document.getElementById("start").onclick = start;
    clearInterval(contar);
    document.getElementById("relogio").innerHTML = formatoData(hora) + ":" + formatoData(minuto) + ":" + formatoData(segundo);
}

function timerStart(){
    if (segundo < 00) {
        minuto--;
        segundo = 0;
    }
    document.getElementById("relogio").innerHTML = formatoData(hora) + ":" + formatoData(minuto) + ":" + formatoData(segundo);
    segundo--;
}
function cronometrar() {
    if (segundo > 59) {
        minuto++;
        segundo = 0;
    }
    document.getElementById("relogio").innerHTML = formatoData(hora) + ":" + formatoData(minuto) + ":" + formatoData(segundo);
    segundo++;
}

function formatoData(numero) {
    texto = "";
    if (numero < 10) {
        texto = "0" + numero;
    } else {
        texto = numero;
    }
    return texto;
}

function TimerOn(){
    document.getElementById("cronometro").checked = false;
    document.getElementById("start").onclick = startTimer;
    minuto = 2;
    segundo = 59;
    hora = 0;
}

function CronometroOn(){
    document.getElementById("timer").checked = false;
    minuto = 0;
    segundo = 0;
    hora = 0;
}

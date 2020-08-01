var minuto = 0;
var segundo = 0;
var hora = 0;
var contar;
var botaoStart;
var verificar;

function carregar() {
    botaoStart = document.getElementById("start");
    botaoStart.onclick = start;
    document.getElementById("stop").onclick = pare;
    document.getElementById("clear").onclick = limpar;
    verificar = document.getElementById("cronometro");
}

function pare() {
    if(verificar.checked){
        botaoStart.onclick = start;
    } else {
        botaoStart.onclick = startTimer;
    }
    enableRadio();
    clearInterval(contar);
}

function start() {
    botaoStart.onclick = null;
    contar = setInterval(cronometrar, 1000);
    disableRadio();
}

function startTimer(){
    botaoStart.onclick = null;
    disableRadio();
    contar = setInterval(timerStart, 1000);
}

function limpar(){
    if(verificar.checked){
        minuto = 0;
        segundo = 0;
        hora = 0;
        botaoStart.onclick = start;
    } else {
        minuto = 2;
        segundo = 59;
        hora = 0
        botaoStart.onclick = startTimer;
    }
    
    clearInterval(contar);
    mostrarData();
    enableRadio();
}

function timerStart(){
    if (segundo < 00) {
        minuto--;
        segundo = 0;
    }
    mostrarData();
    segundo--;
}
function cronometrar() {
    if (segundo > 59) {
        minuto++;
        segundo = 0;
    }
    mostrarData();
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

function mostrarData(){
    document.getElementById("relogio").innerHTML = formatoData(hora) + ":" + formatoData(minuto) + ":" + formatoData(segundo);
}

function TimerOn(){
    minuto = 2;
    segundo = 59;
    hora = 0;
    document.getElementById("cronometro").checked = false;
    botaoStart.onclick = startTimer;
    
}

function CronometroOn(){
    minuto = 0;
    segundo = 0;
    hora = 0;
    document.getElementById("timer").checked = false;
    botaoStart.onclick = start;
}

function disableRadio(){
    document.getElementById("cronometro").disabled = true;
    document.getElementById("timer").disabled = true;
}

function enableRadio(){
    document.getElementById("cronometro").disabled = false;
    document.getElementById("timer").disabled = false;
}
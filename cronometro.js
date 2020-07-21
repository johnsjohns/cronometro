var minuto = 0;
var segundo = 0;
var hora = 0;
var contar;


function carregar() {
    document.getElementById("start").onclick = start;
    document.getElementById("stop").onclick = pare;
}

function pare() {
    document.getElementById("start").onclick = start;
    clearInterval(contar);
}

function start() {
    document.getElementById("start").onclick = null;
    contar = setInterval(cronometrar, 1000);

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
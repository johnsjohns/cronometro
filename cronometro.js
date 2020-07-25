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
    document.getElementById("start").onclick = start;
    clearInterval(contar);
}

function start() {
    document.getElementById("start").onclick = null;
    contar = setInterval(cronometrar, 1000);

}

function limpar(){
    minuto = 0;
    segundo = 0;
    hora = 0;
    document.getElementById("start").onclick = start;
    clearInterval(contar);
    document.getElementById("relogio").innerHTML = formatoData(hora) + ":" + formatoData(minuto) + ":" + formatoData(segundo);
    segundo++;

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


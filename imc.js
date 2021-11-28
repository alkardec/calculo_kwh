function calcular(anterior, atual){
    var anterior = document.getElementById('txtAnterior').value;
    var atual = document.getElementById('txtAtual').value;
    var kwhconsumido = atual - anterior;
    document.getElementById('resultado').innerHTML = kwhconsumido.toFixed(2);

    var uso = kwhconsumido * 0.34895;
    var energia = kwhconsumido * 0.32662;
    var soma01 = (uso + energia) + 21.47;
    var pis = (soma01 * 0.72) / 100;
    var cofins = (soma01 * 3.3) / 100;
    var valorpagar = uso + energia + 21.47 + pis + cofins + 9.77;
    document.getElementById('resultado2').innerHTML = valorpagar.toFixed(2);
}

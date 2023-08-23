var res = document.getElementById('res');
var c = 0;

function contar() {
    var inicio = parseInt(document.getElementById(`nI`).value);
    var fim = parseInt(document.getElementById('nF').value);
    var passo = parseInt(document.getElementById('nP').value);

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        res.innerHTML = 'Impossível contar!';
    } else {
        res.innerHTML = '';

        for (var c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} ➡️`;
        }
    }
    res.innerHTML += `✨`
}

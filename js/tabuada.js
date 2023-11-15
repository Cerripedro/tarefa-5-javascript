const numero = 5;
let tabuada = '';
for (let i = 1; i <= 10; i++) {
    tabuada += `${numero} x ${i} = ${numero * i}\n`; // Adiciona cada linha à string
}
alert(tabuada); // Mostra a tabuada completa em um alert

function gerarTabuada() {
    let valor = document.getElementById('valorTabuada').value;
    valor = parseInt(valor);

    let resultadoTabuada = '';
    for (let i = 1; i <= 10; i++) {
        resultadoTabuada += `${valor} x ${i} = ${valor * i}\n`; // Constrói a string com a tabuada
    }
    alert(resultadoTabuada); // Mostra a tabuada em um alert
}

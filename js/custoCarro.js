function calcularCustoFinal() {
    let custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    let percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value) / 100;
    let percImpostos = parseFloat(document.getElementById('percImpostos').value) / 100;

    let custoFinal = custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos);

    document.getElementById('valorFinal').value = `R$ ${custoFinal.toFixed(2)}`;
}

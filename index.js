const NOTAS_DISPONIVEIS = [
    100,
    50,
    10,
    5,
    1,
    0.50,
    0.10,
    0.05,
    0.01
]

function calculaNotas (valorTotal, valorPago) {
    let troco = Math.round((valorPago - valorTotal) * 100) / 100
    let trocoEmNotas = []
    let i = 0
    
    while (troco > 0){
        if (troco >= NOTAS_DISPONIVEIS[i]) {
            trocoEmNotas.push(NOTAS_DISPONIVEIS[i])
            troco = Math.round((troco - NOTAS_DISPONIVEIS[i]) * 100) / 100
            continue
        } 
        i++
    }
    return trocoEmNotas
}



console.log(calculaNotas(59.23, 100))
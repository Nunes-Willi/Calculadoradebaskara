function delta(a, b, c) {
    return (b*b) - (4*(a*c))
}
function baskara(a, b, c) {
    const valorDelta = delta(a, b, c)
    if(valorDelta < 0)
    return({ x1: "Inexistente", x2: "Inexistente" })
    else {
        const valor_x1 = (-b + Math.sqrt(valorDelta)) / (2 * a)
        const valor_x2 = (-b - Math.sqrt(valorDelta)) / (2 * a)
        return ({x1: valor_x1, x2: valor_x2})
    }
}

function handleBtnCalcular() {
    const valorA = document.getElementById('vA').value
    const valorB = document.getElementById('vB').value
    const valorC = document.getElementById('vC').value
    const raizes = baskara(valorA, valorB, valorC)
    document.getElementById('inputx1').value = raizes.x1
    document.getElementById('inputx2').value = raizes.x2
}

document.getElementById('btnCalcular').addEventListener('click', handleBtnCalcular)



// const resultado1 = baskara (1, 8, 10)
// console.log (resultado1)
// const resultado2 = baskara (1, 6, 4)
// console.log (resultado2)
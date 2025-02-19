// SEM PARAMETRO 
function mostrarMensagem() {
    console.log("Olá")
}

mostrarMensagem() //usamos iss para chamar a função 

function contarAtetres() {
    for(let i = 1; i <= 3; i++) {
        console.log(i)
    }
}
contarAtetres()

// COM PARAMETRO 
function somar(a, b) {
    let resultado = a + b 
    return resultado 
}
console.log(soma(3,7))
console.log(soma(10,3))
console.log(soma(8,125))

function aoQuadrado(numero) {
    let quadrado = numero * numero 
    return quadrado 
}
console.group(aoQuadrado(5))
console.log(aoQuadrado(8))
console.log(aoQuadrado(251))
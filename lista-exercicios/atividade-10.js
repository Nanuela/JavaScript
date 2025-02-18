let filmes = ["Harry Potter", "O diabo veste prada", "De volta para o futuro"]

console.log(filmes[0])

console.log("----------------")
let frutas = ["Banana", "Maça", "Uva", "Manga", "Melancia"]

console.log(frutas[3])

console.log("----------------")
let cores = ["Azul", "Vermelho", "Rosa"]

console.log(cores[0])

cores.push("Roxo")
console.log(cores)

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

console.log("----------------")
let numeros = ["1", "2", "3", "4"]

console.log(numeros[0])

numeros.pop(3)
console.log(numeros)

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log("----------------")
let cidades = ["Roma", "Milão"]

console.log(cidades[0])

cidades.unshift("Bologna")
console.log(cidades)

for(let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}

console.log("----------------")
let animais =["Gato", "Cachorro", "Coelho"]

console.log(animais[0])

animais.shift(0)
console.log(animais)

for(let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}

console.log("----------------")
let carros = ["Ferrari", "Bmw", "Hyundai", "Honda"]

console.log(carros)

console.log("----------------")
let num1 = []
num1.push(10, 20, 30)
num1.unshift(5)
num1.pop()
num1.shift()

for (cont = 0; cont < animais.length; cont++) {
    console.log("Array final:", num1[cont])
}
console.log("Tamanho do array:", num1.length)




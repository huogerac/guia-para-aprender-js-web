let elPasso1 = document.getElementById('soma')
let elPasso2 = document.getElementById('multiplica')
let elPasso3 = document.getElementById('divide')

const PASSO1_TEMPO = 2000
const PASSO2_TEMPO = 3000
const PASSO3_TEMPO = 1000

function soma(n1, n2, callback) {
    let resultado = n1 + n2
    setTimeout(callback, PASSO1_TEMPO, resultado, elPasso1)
    return resultado
}

function multiplica(n1, n2, callback) {
    let resultado = n1 * n2
    setTimeout(callback, PASSO2_TEMPO, resultado, elPasso2)
    return resultado
}

function divide(n1, n2, callback) {
    let resultado = n1 * n2
    setTimeout(callback, PASSO3_TEMPO, resultado, elPasso3)
    return resultado
}

function exibe(valor, el) {
    el.style.color = 'red'
    el.textContent += ' 👉 ' + valor
    console.log(valor)
}



// // Passo 1
// setTimeout(function() {
//     elPasso1.style.color = 'red'
//     let op = 40 + 2 // SOMA
//     elPasso1.textContent += ' 👉 ' + op
//     console.log(op)
// }, PASSO1_TEMPO)

// // Passo 2
// setTimeout(function() {
//     elPasso2.style.color = 'red'
//     let op = 40 * 2  // MULTIPLICA
//     elPasso2.textContent += ' 👉 ' + op
//     console.log(op)
// }, PASSO2_TEMPO)


// // Passo 3
// setTimeout(function() {
//     elPasso3.style.color = 'red'
//     let op = 40 / 2  // MULTIPLICA
//     elPasso3.textContent += ' 👉 ' + op
//     console.log(op)
// }, PASSO3_TEMPO)






// soma(40, 2, exibe)
// multiplica(40, 2, exibe)
// divide(40, 2, exibe)


soma(40, 2, function(p1, p2) {
    exibe(p1, p2)
    multiplica(40, 2, function(p1, p2) {
        exibe(p1, p2)
        divide(40, 2, function(p1, p2) {
            exibe(p1, p2)
        })
    })
})



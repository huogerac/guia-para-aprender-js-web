let elPasso1 = document.getElementById('soma')
let elPasso2 = document.getElementById('multiplica')
let elPasso3 = document.getElementById('divide')

const PASSO1_TEMPO = 2000
const PASSO2_TEMPO = 3000
const PASSO3_TEMPO = 1000

function soma(n1, n2) {
    return new Promise((resolve, reject) => {
        let resultado = n1 + n2
        resolve(resultado)
    })
}

function multiplica(n1, n2) {
    return new Promise((resolve, reject) => {
        let resultado = n1 * n2
        resolve(resultado)
    })
}

function divide(n1, n2, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let resultado = n1 / n2
            resolve(resultado)
        }, PASSO3_TEMPO)
    })
}

function exibe(valor, el) {
    el.style.color = 'red'
    el.textContent += ' 👉 ' + valor
    console.log(valor)
}

soma(40, 2).then((resultado) => {
    exibe(resultado, elPasso1)
    multiplica(40, 2).then((resultado) => {
        exibe(resultado, elPasso2)
        divide(40, 2).then((resultado) => {
            exibe(resultado, elPasso3)
        })
    })
})

// soma(40, 2, function(p1, p2) {
//     exibe(p1, p2)
//     multiplica(40, 2, function(p1, p2) {
//         exibe(p1, p2)
//         divide(40, 2, function(p1, p2) {
//             exibe(p1, p2)
//         })
//     })
// })



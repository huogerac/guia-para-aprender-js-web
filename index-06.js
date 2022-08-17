function soma(n1, n2, callback) {
    let resultado = n1 + n2
    callback(resultado)
    return resultado
}

function multiplica(n1, n2, callback) {
    let resultado = n1 * n2
    callback(resultado)
    return resultado
}

function exibe(valor) {
    console.log(valor)
}

soma(40, 2, exibe)
multiplica(40, 2, exibe)

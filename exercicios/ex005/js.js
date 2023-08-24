var num = document.getElementById(`num`)
var display = document.getElementById(`display`)
var vetor = []
let res = document.getElementById(`res`)

function adicionar() {
    let n = Number(num.value)
    res.innerText = ``

    if (num.value.length == 0) {
        window.alert(`[ERRO]: Adicione um numero!`)

    } else if (num.value < 1 || num.value > 100) {
        window.alert(`[ERRO]: Numero precisa ser entre  1 e 100!`)
        num.value = ``

    } else if (vetor.indexOf(n) > -1) {
            window.alert(`[ERRO]: Numero ja encontrado na lista`)
            num.value = ``

    } else {
            vetor.push(n)
            num.value = ``
            
            let item = document.createElement(`option`)
            item.text = `Valor ${n} adicionado!`
            item.value = n
            display.appendChild(item)
    }
}

function finalizar() {
    
    res.innerText = ``
    
    if (vetor.length == 0) {
        window.alert(`[ERRO]: Adicione um numero!`)

    } else {
    vetor.sort()
    let s = 0

    for(let c = 0; c < vetor.length; c++) {
        s += Number(vetor[c])
    }

    let m = s / vetor.length

    res.innerHTML += `Ao todo temos ${vetor.length} numeros cadastrados. <br>`
    res.innerHTML += `O maior valor informado foi ${vetor[vetor.length-1]}. <br>`
    res.innerHTML += `O menor valor informado foi ${vetor[0]}. <br>`
    res.innerHTML += `Somando todos os valores, temos ${s}. <br>`
    res.innerHTML += `A media dos valores digitados e ${m}.`
}
}
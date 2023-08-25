let num = document.getElementById(`num`)
let display = document.getElementById(`display`)
let vetor = []
let res = document.getElementById(`res`)

function adicionar() {
    let n = Number(num.value)
    res.innerText = ``
    num.focus()

    if (num.value.length == 0) {
        window.alert(`[ERRO]: Adicione um numero!`)

    } else if (num.value < 1 || num.value > 100) {
        window.alert(`[ERRO]: Numero precisa ser entre  1 e 100!`)
        num.value = ``
        num.focus()

    } else if (vetor.indexOf(n) > -1) {
            window.alert(`[ERRO]: Numero ja encontrado na lista`)
            num.value = ``
            num.focus()

    } else {
            vetor.push(n)
            num.value = ``
            num.focus()
            vetor.sort((a, b) => a - b);
            
            let item = document.createElement(`option`)
            item.text = `Valor ${n} adicionado!`
            item.value = n
            display.appendChild(item)
    }
}

function finalizar() {
        res.innerText = ``
        num.focus()
        
        if (vetor.length == 0) {
            window.alert(`[ERRO]: Adicione um numero!`)

        } else {
        let s = 0

        for(let c = 0; c < vetor.length; c++) {
            s += Number(vetor[c])
        }
        
        let m = s / vetor.length
        res.innerHTML += `Ao todo temos ${vetor.length} numeros cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${vetor[vetor.length - 1]}. <br>`
        res.innerHTML += `O menor valor informado foi ${vetor[0]}. <br>`
        res.innerHTML += `Somando todos os valores, temos ${s}. <br>`
        res.innerHTML += `A media dos valores digitados e ${m}.`
    }
}
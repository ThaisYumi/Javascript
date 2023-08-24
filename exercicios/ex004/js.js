function gerar() {
    let num = document.getElementById(`num`)
    let tab = document.getElementById(`tabuada`)
    if (num.value.length == 0) {
        window.alert(`[Erro]: Por favor, digite um numero!`)
    } else {
        let n = Number(num.value)
        let c = 0
        tab.innerHTML = ``
        for(c = 0; c <= 10; c++) {
            let item = document.createElement(`option`)
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tab.appendChild(item)
        }
    }
    
}
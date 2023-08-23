function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById(`ano`)
    var res = document.getElementById(`res`)
 
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert(`[ERRO]: Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fAno.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

        if (fsex[0].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade <= 2) {
                img.setAttribute(`src`, `bebe.jpg`)
            } else if (idade <= 5) {
                img.setAttribute(`src`, `mulher-2.jpg`)
            } else if (idade <= 14) {
                img.setAttribute(`src`, `mulher-8.jpg`)
            } else if (idade <= 19) {
                img.setAttribute(`src`, `mulher-15.jpg`)
            } else if (idade <= 29) {
                img.setAttribute(`src`, `mulher-20.jpg`)
            } else if (idade <= 39) {
                img.setAttribute(`src`, `mulher-30.jpg`)
            } else if (idade <= 59) {
                img.setAttribute(`src`, `mulher-40.jpg`)
            } else {
                img.setAttribute(`src`, `mulher-60.jpg`)
            }
        } else {
            genero = `Homem`
            if (idade >= 0 && idade < 2) {
                img.setAttribute(`src`, `bebe.jpg`)
            } else if (idade <= 5) {
                img.setAttribute(`src`, `homem-2.jpg`)
            } else if (idade <= 14) {
                img.setAttribute(`src`, `homem-8.jpg`)
            } else if (idade <= 19) {
                img.setAttribute(`src`, `homem-15.jpg`)
            } else if (idade <= 29) {
                img.setAttribute(`src`, `homem-20.jpg`)
            } else if (idade <= 39) {
                img.setAttribute(`src`, `homem-30.jpg`)
            } else if (idade <= 59) {
                img.setAttribute(`src`, `homem-40.jpg`)
            } else {
                img.setAttribute(`src`, `homem-60.jpg`)
            }
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
function carregar() {
    var texto = document.getElementById(`texto`)
    var texto2 = document.getElementById(`texto2`)
    var img = document.getElementById(`imagem`)
    var fundo = document.getElementById(`fundo`)
    var data = new Date()
    var hora = data.getHours()

    texto.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 6 && hora <= 12) {
        img.src = `manha-p.jpg`
        fundo.style.background = `#F0DD60`
        texto2.innerHTML = `Bom dia!`
        
    } else if (hora >= 13 && hora <= 18) {
        img.src = `tarde-p.jpg`
        fundo.style.background = `#E0AE4E`
        texto2.innerHTML = `Boa tarde!` 

    } else {
        img.src = `noite-p.jpg`
        fundo.style.background = `#0B004F`
        texto2.innerHTML = `Boa noite!`
    }
}
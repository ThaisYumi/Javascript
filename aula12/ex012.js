var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora <= 12 && hora >= 6) {
    console.log(`Bom dia!`)
} else if (hora <= 18 && hora >= 6) {
    console.log(`Boa tarde!`)
} else if (hora <= 23 && hora >= 6) {
    console.log(`Boa noite!`)
} else {
    console.log(`Boa madrugada!`)
}
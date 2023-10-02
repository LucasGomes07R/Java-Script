var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora sao ${hora} horas.`
if(hora >= 00 && hora < 12) {
    // Bom Dia!!
    img.src = 'manha.png'
    document.body.style.background = '#ecde8b'
}else if(hora >= 12 &&  hora <= 18 ) {
    //Boa Tarde!!
    img.src = 'tarde'
    document.body.style.background = '#c49743'
}else{
    //Boa Noite!!
    img.src = 'noite.png'
    document.body.style.background = '#0a0a2b'
}




function carregar(){
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#E2CD9F'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#B9846F'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}33333



function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = prompt('Informe que horas são: ')
    
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        msg.innerHTML = 'Bom dia!'
        document.body.style.background = '#e0dfaf'
        
    }else if(hora >= 12 && hora <= 18) {
        img.src = 'entardecer.png'
        msg.innerHTML = 'Boa tarde!'
        document.body.style.background = '#eea36e'
        
        //boa tarde
    }else{
        img.src = 'noite.png'
        msg.innerHTML = 'Boa noite!'
        document.body.style.background = '#0f3043'
        //boa noite
    }
}
function mostrarHora(){
    let data = new Date();
    let hora = data.getHours();
    let horatxt = document.getElementById('hora');
    let imgdiv = document.getElementById('imagem');
    let img = document.createElement('img');

    if(hora == 1 || hora == 0){
        horatxt.innerHTML = `Agora é ${hora} hora`;
    }else{
        horatxt.innerHTML = `Agora são ${hora} horas`;
    }

    if(hora >= 6 && hora < 12){
        img.setAttribute('src', 'imagens/fotomanha.png');
        document.body.style.background = 'linear-gradient(to bottom right, #d9bc83, #e2d2aa)';
    }else if(hora < 18){
        img.setAttribute('src', 'imagens/fototarde.png');
        document.body.style.background = 'linear-gradient(to bottom right, #70434a, #d47d3a)';
    }else{
        img.setAttribute('src', 'imagens/fotonoite.png');
        document.body.style.background = 'linear-gradient(to bottom right, #18566f, #337b9b)';
    }
    imgdiv.append(img);
}
function verificar(){
    let anoNasc = document.getElementById('anonasc');
    let anoAtual = new Date().getFullYear();
    
    if(anoNasc.value && anoNasc.value < anoAtual && anoNasc.value > 0){
        let idade = anoAtual - anoNasc.value;       
        let resultado = document.getElementById('resultado');
        let sexorad = document.getElementsByName('sexorad');
        let img = document.createElement('img');
        img.style.marginTop = '15px';
        let sexo;

        if(sexorad[0].checked){
            sexo = 'Homem';
            if(idade < 13){
                img.setAttribute('src', 'imagens/foto-crianca-m.png');
            }else if(idade <= 20){
                img.setAttribute('src', 'imagens/foto-jovem-m.png');
            }else if(idade <= 50){
                img.setAttribute('src', 'imagens/foto-adulto-m.png');
            }
            else{
                img.setAttribute('src', 'imagens/foto-idoso-m.png');
            }
        }else if(sexorad[1].checked){
            sexo = 'Mulher';
            if(idade < 13){
                img.setAttribute('src', 'imagens/foto-crianca-f.png');
            }else if(idade <= 20){
                img.setAttribute('src', 'imagens/foto-jovem-f.png');
            }else if(idade <= 50){
                img.setAttribute('src', 'imagens/foto-adulto-f.png');
            }else{
                img.setAttribute('src', 'imagens/foto-idoso-f.png');
            }
        }
        resultado.innerHTML = `Verificamos: ${sexo} com ${idade} anos`;
        resultado.appendChild(img);
    }else{
        alert('Verifique os dados e tente novamente!');
    }
}
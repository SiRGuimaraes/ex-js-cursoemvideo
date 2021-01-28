function contar(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let intervalo = document.getElementById('intervalo');
    let contagem = document.getElementById('contagem');
    
    if(inicio.value && fim.value){
        let inicioval = Number(inicio.value);
        let fimval = Number(fim.value);
        let intervaloval = Number(intervalo.value);

        if(intervaloval == 0){
            alert('Intervalo inválido, atribuindo valor 1 ao intervalo');
            intervalo.value = 1;
        }
    
        contagem.innerHTML = 'Contando:<br>';

    if(inicioval < fimval){
        for(let i = inicioval; i <= fimval; i += intervaloval){
            contagem.innerHTML += ` ${i} \u{1f449}`;
        }
    }else if(inicioval > fimval){
        for(let i = inicioval; i >= fimval; i -= intervaloval){
            contagem.innerHTML += ` ${i} \u{1f449}`;
        }
    }

    contagem.innerHTML += ` \u{1f3c1}`;

    }else{
        alert('[ERRO] Verifique os dados e tente novamente!');
    }
}
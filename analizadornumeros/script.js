let numero = document.getElementById('numero');
let lista = document.getElementById('lista');
let resultado = document.getElementById('resultado');
let listaValores = [];

function numValido(num){
    if(num >= 1 && num <= 100){
        return true;
    }else{
        return false;
    }
}
function numExiste(num, lista){
    if(lista.indexOf(num) > -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(!numValido(Number(numero.value))){
        alert('Número Inválido!');
    }else if(numExiste(Number(numero.value), listaValores)){
        alert('Número já adicionado na lista!');
    }else{
        listaValores.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `Número ${numero.value} adicionado.`
        lista.append(item)
        resultado.innerHTML = '';
    }
    numero.value = '';
    numero.focus();
}

function finalizar(){
    let total = listaValores.length;
    let maior = listaValores[0];
    let menor = listaValores[0];
    let soma = 0;
    let media = 0;

    for(i in listaValores){
        if(listaValores[i] > maior){
            maior = listaValores[i];
        }
        if(listaValores[i] < menor){
            menor = listaValores[i];
        }
        soma += listaValores[i];
    }

    media = soma / total;

    resultado.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    resultado.innerHTML += `<p>A média dos valores informados é ${media.toFixed()}.</p>`;
}

function limpar(){
    listaValores = [];
    lista.innerHTML = '';
    resultado.innerHTML = '';
}
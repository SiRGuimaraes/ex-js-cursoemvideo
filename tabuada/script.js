function gerarTabuada(){
    let numero = document.getElementById("numero");

    if(numero.value){
        let tabuada = document.getElementById("tabuada");
        tabuada.innerHTML = "";
        
        for(let i = 1; i <=10; i++){
            let tabitem = document.createElement("option");
            let res = i * Number(numero.value);
            tabitem.value = `tab${i}`;
            
            tabitem.innerHTML = `${numero.value} x ${i} = ${res}`;
            tabuada.append(tabitem);
        }
    }else{
        alert("[ERRO] Campo vazio, digite um número!");
    }
}
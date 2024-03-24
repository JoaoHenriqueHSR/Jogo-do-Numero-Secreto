let listaNumerosGerados=[];
let nMaximo=100;
let tentativas=1;

let numeroSecreto=gerarNumeroAleatorio();
function gerarNumeroAleatorio(){
    let numeroGerado=parseInt(Math.random()*nMaximo+1);
    let quantidadeElementoLista=listaNumerosGerados.length;
    if(quantidadeElementoLista==nMaximo){
        listaNumerosGerados=[];
    }
    if(listaNumerosGerados.includes(numeroGerado)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosGerados.push(numeroGerado);
        return numeroGerado
    }
}

function campo(tag, texto){
    let paragrafo=document.querySelector(tag);
    paragrafo.innerHTML=texto;
    //responsiveVoice.speak(texto, `Brazilian Portuguese Female`, {rate:1.2});//esse coidigo permite que o texto seja lido
}
function recarregaTextoPagina(){
    campo(`h1`,`Escolha o numero secreto`);
    campo(`p`, `Escolha um numero de 1 a ${nMaximo}`);
}
recarregaTextoPagina();

function verificarChute(){
    let chute=document.querySelector(`.container__input`).value;
    function limparTexto(){
        chute=document.querySelector(`.container__input`).value=``;
    }

    if(chute==numeroSecreto){
        let textoTentativas=tentativas>1?`tentativas`:`tentativa`
        campo(`h1`,`Voce acertou usando ${tentativas} ${textoTentativas}!`);
        campo(`p`,`O numero era mesmo ${numeroSecreto}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else if(chute>numeroSecreto){
        campo(`p`,`O numero e menor ↓`);
    }else{
        campo(`p`,`O numero maior ↑`);
    }
    tentativas+=1;
    limparTexto();
}
function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    recarregaTextoPagina();
    tentativas=1; 
    document.getElementById(`reiniciar`).setAttribute(`disabled`,true);
    }
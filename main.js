let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNome(){
    let meuNome = prompt("Please,set your name");
    if(!meuNome||meuNome === null){
        defineNome();
    }   else {
        localStorage.setItem("nome",meuNome);
        meuCabecalho.textContent = "Mozilla is cool, " + meuNome;
    }
}

if(!localStorage.getItem("nome")){
    defineNome();
}   else {
    let nomeGuardado = localStorage.getItem("nome");
    meuCabecalho.textContent = "Mozilla is cool, " + nomeGuardado;
}

meuBotao.onclick = function(){
    defineNome();
}
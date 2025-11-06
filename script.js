//Selecione os elementos das luzes
const luzVermelho = document.getElementsById("vermelho");
const luzAmarelo = document.getElementsById("amarelo");
const luzVerde = document.getElementsById("verde");
// Botões
const btnVermelho = document.getElementsById("btnVermelho");
const btnAmarelo = document.getElementsById("btnAmarelo");
const btnVerde = document.getElementsById("btnVerde");
const btnAuto = document.getElementsById("btnAuto");
const btnParar = document.getElementsById("btnParar");
// Variável para o modo automático
let intervalo;

function limpar(){
    luzVermelho.className = 'luz';
    luzAmarelo.className = 'luz';
    luzVerde.className = 'luz';
}

function acenderVermelho(){
    limpar();
    luzVermelho.classList.add("acesa","vermelho");
}

function acenderAmarelo(){
    limpar();
    luzAmarelo.classList.add("acesa","amarelo");
}
function acenderVerde(){
    limpar();
    luzVerde.classList.add("acesa","verde");
}

function modoAutomatico(){
    limpar();
    let estado =0;
    intervalo = setInterval(()=>{
        if(estado === 0 ) acenderVermelho();
        else if(estado === 1) acenderAmarelo();
        else if(estado === 2) acenderVerde();
        estado = (estado + 1) % 3;
    },1000)
}
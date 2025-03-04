const btnavancar = document.getElementById("btn-avancar")
const btnvoltar = document.getElementById("btn-voltar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoatual = 0;
btnavancar.addEventListener("click",function(){
    if(cartaoatual === cartoes.length - 1) return;
    cartoes[cartaoatual].classList.remove("selecionado");
    cartaoatual = cartaoatual + 1;
    cartoes[cartaoatual].classList.add("selecionado");
});

btnvoltar.addEventListener("click",function(){
    if(cartaoatual === 0) return;
    cartoes[cartaoatual].classList.remove("selecionado");
    cartaoatual = cartaoatual - 1;
    cartoes[cartaoatual].classList.add("selecionado");
});
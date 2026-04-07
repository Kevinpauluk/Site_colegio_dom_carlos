document.addEventListener("DOMContentLoaded", function(){
const secaoAgenda = document.querySelector("#agenda");
if (secaoAgenda){
const ulAgenda = secaoAgenda.querySelector("ul");
if (ulAgenda){
    ulAgenda.classList.add("agenda");
     }
   }
   
   const secaoContato = document.querySelector("#contato");
   if(secaoContato){
    secaoContato.classList.add(contato-box);
   }

   const linksMenu = document.querySelector("nav a");
   const secoes = document.querySelectorAll("section[id]");

   const cards = document.querySelectorAll(".card");
   for(let i = 0; i < cards.length; i++){
    cards[i].Style.transition = "0.3s ease";

    cards[i].addEventListener("mouseenter", function(){
      this.style.transform = "traslateY(-6px)";
    });

    cards[i].addEventListener("mouseenter", function(){
      this.style.transform = "traslateY(0)";
   });
 }
 
 const botao = document.querySelector("btn");
 if(botao){
  botao.addEventListener("click", function(){
    alert("Você está vendo sobre o colegio");
  });
 }

 if(secaoContato){
  const paragrafos = secaoContato.querySelectorAll("p");
  for(let i = 0; i < paragrafos.length, i++){
    if(paragrafos[i].textContent.includes("@")){
       paragrafos[i].style.cursor = "pointer";
       paragrafos[i].addEventListener("click", function(){
         alert("E-mail de contato: contato@domcarlos.edu.br")
       });
     }
   }
 }


});
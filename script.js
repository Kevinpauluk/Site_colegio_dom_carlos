document.addEventListener("DOMContentLoaded", function(){
const secaoAgenda = document.querySelector("#agenda");
if (secaoAgenda){
const ulAgenda = secaoAgenda.querySelector("ul");
if (ulAgenda){
    ulAgenda.classList.add("agenda")
     }
   }
});
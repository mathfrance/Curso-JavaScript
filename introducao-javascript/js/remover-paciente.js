var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    var paiDoTDAlvo = event.target.parentNode;
    paiDoTDAlvo.classList.add("fadeOut");

    setTimeout(function() {
        paiDoTDAlvo.remove();
    }, 500);

})
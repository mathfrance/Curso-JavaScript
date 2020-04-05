var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {

        if (xhr.status == 200) {
            document.querySelector("#erro-busca").classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            document.querySelector("#erro-busca").classList.remove("invisivel");
        }
    })
    xhr.send();
})
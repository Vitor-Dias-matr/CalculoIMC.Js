var texto = document.querySelector(".Titulo");
console.log(document.querySelector(".Titulo"));
texto.textContent = "Nutriçao Aparecida!!"

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];


    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var imcTabela = paciente.querySelector(".info-imc");

    var pasoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        pasoValido = false;
        imcTabela.textContent = "Peso Invalido";
        console.log("Peso Invalido");
        //paciente.style.backgroundColor = "red";
        paciente.classList.add("paciente-Invalido");
    }

    if (altura <= 0 || altura >= 3) {
        alturaValida = false
        imcTabela.textContent = "Altura Invalida";
        console.log("Altura Invalida");
        //paciente.style.backgroundColor = "red";
        paciente.classList.add("paciente-Invalido");
    }

    if (pasoValido && alturaValida) {
        var imc = calculaImc(peso,altura);
        imcTabela.textContent = imc;

    }
}


function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    //console.log("Click no Botao Adicionar!!!")

    var formularioAdiciona = document.querySelector("#formulario-Adiciona");

    var nome = formularioAdiciona.nome.value;
    var peso = formularioAdiciona.peso.value;
    var altura = formularioAdiciona.altura.value;
    var gordura = formularioAdiciona.gordura.value

    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    console.log(pacienteTr)

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

}); 
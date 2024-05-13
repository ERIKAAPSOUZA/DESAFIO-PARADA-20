function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3)/3;

    var resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "Media do Aluno: " + media.toFixed(2);

    if (media >=6){
        resultadoElement.innerHTML += "Aluno Aprovado";
    }else{
        resultadoElement.innerHTML += "Aluno Reprovado"
    }

}
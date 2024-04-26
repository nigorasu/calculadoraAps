document.addEventListener('DOMContentLoaded', function() {
    // Adicionando evento de clique ao botão "Somar notas"
    document.getElementById('botaoSoma').addEventListener('click', function() {
        let nota1 = parseFloat(document.getElementById('nota1').value);
        let nota2 = parseFloat(document.getElementById('nota2').value);
        let nota3 = parseFloat(document.getElementById('nota3').value);

        const soma = nota1 + nota2 + nota3;

        // Exibindo a soma das notas
        document.getElementById('resultado').innerHTML = "A soma das notas é: " + soma.toFixed(2);
    });

    // Adicionando evento de clique ao botão "Calcular média"
    document.getElementById('botaoMedia').addEventListener('click', function() {
        let nota1 = parseFloat(document.getElementById('nota1').value);
        let nota2 = parseFloat(document.getElementById('nota2').value);
        let nota3 = parseFloat(document.getElementById('nota3').value);

        const media = (nota1 + nota2 + nota3) / 3;

        // Exibindo a média do aluno
        document.getElementById('resultado').innerHTML = "A média do aluno foi: " + media.toFixed(2);

        // Verificando se o aluno foi aprovado ou reprovado
        if (media < 7) {
            document.getElementById('resultado').innerHTML += "<br>Aluno reprovado!";
        } else {
            document.getElementById('resultado').innerHTML += "<br>Aluno aprovado!";
        }
    });

    // Adicionando evento de clique ao botão "Limpar valores"
    document.getElementById('botaoLimpar').addEventListener('click', function() {
        document.getElementById('nome').value = '';
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
        document.getElementById('resultado').innerHTML = '';
    });
});

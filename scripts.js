// scripts.js
document.getElementById("submit").addEventListener("click", function () {
    // Captura os valores dos campos
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("numero").value;
    const linguagem = document.getElementById("linguagem").value;

    // Exibe a mensagem na tela
    const mensagem = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!";
    alert(mensagem);

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("linguagem").value = "";
});
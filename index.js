        // Exercício 1
        function ex1() {
            let nome = document.getElementById("nome").value;
            let saida = `Olá, ${nome} Estou fazendo a prova parcial.`;
            document.getElementById("saida1").innerText = saida;
        }

        // Exercício 2
        function ex2() {
            let cidade = document.getElementById("cidade").value;
            let idade = document.getElementById("idade").value;
            document.getElementById("saida2").innerText = `Você mora em ${cidade} e tem ${idade} anos.`;
        }

        // Exercício 3
        function ex3() {
            let n1 = Number(document.getElementById("n1").value);
            let n2 = Number(document.getElementById("n2").value);
            let saida = `A soma de ${n1} + ${n2} é ${n1 + n2}`;
            document.getElementById("saida3").innerText = saida;
        }

        // Exercício 4
        function ex4() {
            let idade = Number(document.getElementById("idadeVerdadeira").value);
            let msg = idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
            document.getElementById("saida4").innerText = msg;
        }

        // Exercício 10
        function ex10() {
            let frutas = ["TI", "Gerente de TI", "Analista de TI", "Desenvolvedor de TI", "Chefe de TI"];
            document.getElementById("saida10").innerText = frutas.join("\n");
        }
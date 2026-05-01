
function toggleTheme() {
  // Seleciona o elemento body
  const body = document.body;
  
  // Verifica se a classe 'dark-mode' já está no body
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    console.log("Mudou para Tema Claro");
  } else {
    body.classList.add('dark');
    console.log("Mudou para Tema Escuro");
  }
}


function dobro() {
    let num = parseFloat(prompt("digite um numero"));
    let dobro = 2 * num;
    alert(" o dobro do número é" + dobro);

}
function triplo() {
    let num = parseFloat(prompt("digite um numero"));
    let triplo = 3 * num;
    alert(" o triplo do número é" + triplo);

}
function vterreno() {
    let largura = parseFloat(prompt("Digite a largura do terreno"));
    let comprimento = parseFloat(prompt("Digite o comprimento do terreno"));
    let vterreno = largura * comprimento;
    let valor = parseFloat(prompt("Digite o valor do metro quadrado"));
    alert(" O tamanho do terreno é " + vterreno + "M²");
    alert(" O valor do terreno é R$:" + vterreno * valor.toFixed(2));

}
function vtrestaurante() {
    let valor = parseFloat(prompt("Digite o valor da conta:"));
    let qpessoas = parseFloat(prompt("Quantidade de pessoas que vão pagar a conta"));
    valor = valor / qpessoas;
    alert(" o valor da conta é R$:" + valor.toFixed(2));
}
function vparcelas() {
    let valor = parseFloat(prompt("Digite o valor da compra:"));
    let parcelas = parseFloat(prompt("Digite a quantidade de parcelas:"));
    valor = valor / parcelas;
    alert(" O valor da parcela é R$:" + valor.toFixed(2));

}
function calculos() {
    let num = parseFloat(prompt("Digite um numero:"));
    let num2 = parseFloat(prompt("Digite segundo numero:"));
    let multiplicacao = num * num2;
    let divisao = num / num2;
    let subtracao = num - num2;
    let soma = num + num2;
    alert(" O resultado da multiplicação é: " + multiplicacao);
    alert(" O resultado da divisão é: " + divisao);
    alert(" O resultado da subtração é: " + subtracao);
    alert(" O resultado da soma é: " + soma);
}

function media() {
    let n1 = parseFloat(prompt("Insira o primeiro numero: "));
    let n2 = parseFloat(prompt("Insira o segundo numero: "));
    let n3 = parseFloat(prompt("Insira o terceiro numero: "));
    let n4 = parseFloat(prompt("Insira o quarto numero: "));
    let cmedia = (n1 + n2 + n3 + n4) / 4;

    if (cmedia >= 6) {
        alert("Voce foi aprovado com a media:" + cmedia)

    } else {
        alert("Voce não passou media: " + cmedia)

    }
}
let validuser = "admin";
let validpassword = "1234";


// function verificarLogin() {
//     // Captura os valores dos inputs
//     let login = document.getElementById("logi").value;
//     let senha = document.getElementById("senh").value;


//     let campoResultado = document.getElementById("mensagen");

//     if (login === "admin" && senha === "1234") {
//         campoResultado.value = "Login bem-sucedido!";
//         campoResultado.style.color = "green";
//     } else {
//         campoResultado.value = "Erro: Login ou senha incorretos.";
//         campoResultado.style.color = "red";
//     }
// }

function verificarLogin() {
    let login = document.getElementById("logi").value;
    let senha = document.getElementById("senh").value;
    if (login === "admin" && senha === "1234") {
        document.getElementById("mensagen").value = "Login bem-sucedido!";
        document.getElementById("mensagen").style.color = "green";
        document.getElementById("mensagen").style.fontWeight = "bold";
    } else {
        document.getElementById("mensagen").value = "Login ou senha incorretos. Tente novamente.";
        document.getElementById("mensagen").style.color = "red";
        document.getElementById("mensagen").style.fontWeight = "bold";
    }
}
function verificarIdade() {
    let Vidade = document.getElementById("idade").value;
    if (Vidade >= 18) {
        document.getElementById("confirm").value = "Você é maior de idade.";
        document.getElementById("confirm").style.color = "green";
        document.getElementById("confirm").style.fontWeight = "bold";

    } else {
        document.getElementById("confirm").value = "Você não é maior de idade.";
        document.getElementById("confirm ").style.color = "red";
        document.getElementById("confirm").style.fontWeight = "bold";

    }

}
function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let csenha = document.getElementById("csenha").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (senha === csenha) {
        document.getElementById("resuCadrasto").value = "Cadrasto Confirmado.";
        document.getElementById("resuCadrasto").style.color = "green";
        document.getElementById("resuCadrasto").style.fontWeight = "bold";
    } else if (!regex.test(email)) {
        document.getElementById("resuCadrasto").value = "Email inválido. Tente novamente.";
        document.getElementById("resuCadrasto").style.color = "red";
        document.getElementById("resuCadrasto").style.fontWeight = "bold";

    } else if (nome.length < 3) {
        document.getElementById("resuCadrasto").value = "O nome deve conter pelo menos 3 caracteres.";
        document.getElementById("resuCadrasto").style.color = "red";
        document.getElementById("resuCadrasto").style.fontWeight = "bold";
    } else {
        document.getElementById("resuCadrasto").value = "Erro: Verifique os dados e tente novamente.";
        document.getElementById("resuCadrasto").style.color = "red";
        document.getElementById("resuCadrasto").style.fontWeight = "bold";
    }
}

function calcularImposto() {
    let valorSalario = parseFloat(document.getElementById("valorSalario").value);
    let Vimposto = 0;
    let resultadoImposto = document.getElementById("resultadoImposto");


    if (valorSalario <= 1603.98) {
        document.getElementById("resultadoImposto").value = Vimposto = 0;


    } else if (valorSalario <= 2826.65) {
        document.getElementById("resultadoImposto").value = Vimposto = valorSalario * 0.075;
    } else if (valorSalario <= 3751.05) {
        document.getElementById("resultadoImposto").value = Vimposto = valorSalario * 0.15;
    } else if (valorSalario <= 4664.68) {
        document.getElementById("resultadoImposto").value = Vimposto = valorSalario * 0.225;
    } else {
        document.getElementById("resultadoImposto").value = Vimposto = valorSalario * 0.275;
    }
}

function verificartime() {
    
    let produto = Number(document.getElementById("time").value);
    let mensagem = "";

    switch (produto) {
        case 1:
            mensagem = "O melhor time do Brasil é o Sport Club do Recife!";
            document.getElementById("resultado").style.color = "green";
            document.getElementById("resultado").style.fontWeight = "bold";
            break;
        case 2:
            mensagem = "O melhor time do Brasil é o Santa Cruz!";
              document.getElementById("resultado").style.color = "green";
            document.getElementById("resultado").style.fontWeight = "bold";
            break;
        case 3:
            mensagem = "O melhor time do Brasil é o Náutico!";
              document.getElementById("resultado").style.color = "green";
            document.getElementById("resultado").style.fontWeight = "bold";
            break;
        case 4:
            mensagem = "O melhor time do Brasil é a Ponte Preta!";
              document.getElementById("resultado").style.color = "green";
            document.getElementById("resultado").style.fontWeight = "bold";
            break;
        case 5:
            mensagem = "O melhor time do Brasil é o Santos!";
              document.getElementById("resultado").style.color = "green";
            document.getElementById("resultado").style.fontWeight = "bold";
            break;
        case 6:
            mensagem = "O melhor time do Brasil é o Fortaleza!";
              document.getElementById("resultado").style.color = "green";
            document.getElementById("resultado").style.fontWeight = "bold";
            break;
        default:
            mensagem = "Opção inválida. Digite um número de 1 a 6.";
    }

    document.getElementById("resultado").innerHTML = mensagem;
}
function verificarpedido() {
    let pedido = Number(document.getElementById("pedido").value);
    let qtd = Number(document.getElementById("quantidade").value);
    let mensagem = "";
    let preco = 0;
    let nomeProduto = "";

    switch (pedido) {
        case 1:
            nomeProduto = "Hambúrguer";
            preco = 15.00;
            break;
        case 2:
            nomeProduto = "Pizza";
            preco = 30.00;
            break;
        case 3:
            nomeProduto = "Refrigerante";
            preco = 10.00;
            break;
        case 4:
            nomeProduto = "Combo";
            preco = 50.00;
            break;
        case 5:
            nomeProduto = "Suco";
            preco = 5.00;
            break;
        default:
            document.getElementById("resuPedido").innerHTML = "Opção inválida!";
            return; // Sai da função se for inválido
    }

    // Cálculo do Total
    let total = preco * qtd;

    // Configuração do estilo 
    const display = document.getElementById("resuPedido");
    display.style.color = "#ffff00";
    display.style.fontWeight = "bold";
    display.style.fontFamily = "Arial";

    // Exibe o resultado
    display.innerHTML = `Item: ${nomeProduto} <br> 
                         Qtd: ${qtd} <br>
                         Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}
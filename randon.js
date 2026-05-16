function gerarAleatório() {
    let i = document.getElementById('insert').value;
    let x = Number(Math.floor(Math.random() * 100));
    document.getElementById('random').value = x;

    let y = Math.sqrt(x);
    document.getElementById('random2').value = y;

    let r = Math.pow(x, i);
    document.getElementById('random3').value = r;



}
function apostar() {
    let x = Number(Math.floor(Math.random() * 10));
    let aposta = document.getElementById('aposta').value;



    if (x == aposta) {
        document.getElementById('resultado').innerHTML = 'Acertou! O número é ' + x.toFixed(1) + '. Parabéns!';
    }
    else {
        document.getElementById('resultado').innerHTML = 'Errou! O número era ' + x.toFixed(1) + '. Tente de novo!';

    }


}
// Aula de for
function vendas() {
    let qtq = Number(document.getElementById("quant").value);
    let texto = "";

    for (let i = 1; i <= qtq; i++) {
        texto += "Venda nº " + i + " realizada!<br>";
    }
    document.getElementById("resultado10").innerHTML = texto;
}

let lista = [];
// Adicionar item a lista
function adicionar() {
    let item = document.getElementById("item").value;

    lista.push(item);
    document.getElementById("resultado1").innerHTML = lista;
}
// Remover item da lista
function remover() {
    lista.pop();
    document.getElementById("resultado1").innerHTML = lista;

}

function mostrarlista() {
    let texto = "";

    for (let i = 0; i < lista.length; i++) {
        texto += lista[i] + "br";
    }
    document.getElementById("resultado2").innerHTML = texto;
}

function adicionar1() {
    let item = document.getElementById("item1").value;
    lista.push(item);
    mostrarlista();
}
function remover1() {
    lista.pop();
    mostrarlista();
}

// Aula de while, do while e for

function cadastroWhile() {
    let vagas = 5;
    let texto = "";
    while (vagas > 0) {
        texto += "Poduto cadastrado!<br>";
        vagas--;
    }
    texto += "Não há mais vagas!";
    document.getElementById("res40").innerHTML = texto;
}

function cadastroDoWhile() {
    let continuar;
    let texto = "";
    do {
        texto += "Produto cadastrado!<br>";
        continuar = prompt("Deseja cadastrar outro produto? (sim/não)");
    } while (continuar === "sim");
    document.getElementById("res50").innerHTML = texto;
  
}
function cadastroFor() {
    let texto = "";
    for (let i = 1; i <= 5; i++) {
        texto += "Produto " + i + " cadastrado!<br>";
    }
    document.getElementById("res60").innerHTML = texto;
}





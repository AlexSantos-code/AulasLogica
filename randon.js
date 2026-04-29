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
        document.getElementById('resultado').innerHTML = 'acertou';
    }
 else {
        document.getElementById('resultado').innerHTML = 'Errou! O número era ' + x + '. Tente de novo!';

    }


}
   



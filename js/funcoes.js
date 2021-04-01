let numeroSecreto = 4;

let tentativas = 3;

while (tentativas > 0) {
    let chute = parseInt(prompt("Digiteum número entre 0 e 10:"));
    if (chute == numeroSecreto) {
        alert("Parabéns, você acertou!");
        breack;// o break,faz que encerra o jogo depois que a pessoa acerta o numero secreto
    }

    else if(numeroSecreto > chute){
        alert("O número secreto é maior que o chute");
        tentativas = tentativas -1;
    }
    else if(numeroSecreto< chute){
        alert ("O número secreto é menor que o chute");
    tentativas = tentativas - 1;
    }   

    

 
}
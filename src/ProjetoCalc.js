//Coloquei variáveis em inglês como indicado pelo professor

function rankCalc(victory,defeat){
    let balanceVictory = victory-defeat
    let rank = " "
    
    if (victory<=10){
        rank="ferro"
    }else if((victory>=11)&&(victory<=20)){
        rank="Bronze"
    }else if((victory>=21)&&(victory<=50)){
        rank="Prata"
    }else if((victory>=51)&&(victory<=80)){
        rank="Ouro"
    }else if((victory>=81)&&(victory<=90)){
        rank="Diamante"
    }else if((victory>=91)&&(victory<=100)){
        rank="Lendário"
    }else if(victory>=101){
        rank="Imortal"
    
    }

console.log("O Herói tem de saldo de "+balanceVictory+" esta no nível de "+rank)

}

rankCalc(50,20)


//
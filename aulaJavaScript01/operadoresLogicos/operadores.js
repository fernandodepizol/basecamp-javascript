function comparaNumeros(num1,num2){
    
    if(num1 === num2){
        frase1 = "Os números "+num1+" e "+num2+" são iguais.";
    }else{
        frase1 = "Os números "+num1+" e "+num2+" são diferentes.";
    }
        frase2 = "Sua soma é "+(num1+num2);
    if((num1+num2) < 10)
        frase3 =" que é menor que 10 e menor que 20.";
    else{
        if((num1+num2) > 20)
        frase3 = " que é maior que 10 e maior que 20.";
        else{
            frase3 = " que é maior que 10 e menor que 20.";
        }
    }
    return frase1 + frase2 + frase3;
}

console.log(comparaNumeros(2,17));
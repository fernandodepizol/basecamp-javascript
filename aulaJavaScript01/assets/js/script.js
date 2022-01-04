var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

let button = document.getElementById('zerar');

button.addEventListener('click', zerar());

function zerar(){
    currentNumber = 0;
}

function increment(){
    
    if(currentNumber >= 10){
        
        console.log("FIM DA LINHA!!!");
    }else{
        currentNumber ++;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}


function decrement(){
    
    
    if(currentNumber <=0){
        console.log("COMEÇO DA LINHA!!!");
    }else{
        currentNumber --;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

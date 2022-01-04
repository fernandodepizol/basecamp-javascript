console.log("Hello Word!!!");


function returnEvenValues(array){
    let evenNums = [];
    for(i=0; i<array.length; i++){
        if(array[i] % 2 == 0){
            console.log(i, " é par");
            evenNums.push(array[i]);
        }else{
            console.log(i," é número impar!")
        }
    }
    console.log(evenNums);
}

let array = [1,2,4,5,6,7,8,9];
returnEvenValues(array);
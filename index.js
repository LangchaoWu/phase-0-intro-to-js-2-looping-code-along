// Code your solutions in this file
function writeCards(name,event){
    const arry=[]
    for(let i=0;i<name.length;i++){
        arry[i]=`Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
    return arry;
}

function countDown(num){
    for(let i=num;i>=0;i--){
        console.log(i);
    }
}
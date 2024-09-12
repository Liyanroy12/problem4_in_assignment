
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }
    let timeTotal = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        timeTotal += waitingTimes[i];
    }
    const averageTime = Math.round(timeTotal / waitingTimes.length);  
    const remainingPeople = serialNumber - waitingTimes.length - 1;
    if(remainingPeople < 0){
        return 0;
    }
    else{
        return averageTime * remainingPeople;
    }
}
console.log(waitingTime([3,5,7,11,6],10));
console.log(waitingTime([13,2],10));
console.log(waitingTime([13, 2, 6, 7, 10],6));
console.log(waitingTime([6],4));
console.log(waitingTime(7, 6));
console.log(waitingTime("[6,2]",9));
console.log(waitingTime([3,5,7,11,6],"9"));
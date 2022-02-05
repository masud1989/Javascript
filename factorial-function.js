function getFactorial(number){
    let factorial = 1;
    for(i = 1; i<=number; i++){
        factorial= factorial * i;
    }
    return factorial;
}

let firstFactorial = getFactorial(7)
console.log('The factorial number of 7 is:', firstFactorial);

let secondFactorial = getFactorial(9)
console.log('The factorial number of 9 is:', secondFactorial);





// Assignment-4 
// =============================================================================

// Problem 1: ana to vori
function anaToVori (ana){
    var vori = ana / 16;
    return vori;
}

var resultvori = anaToVori(48);
console.log(resultvori);


// Problem 2: Panda Cost
function pandaCost(singara, samucha, jilapi){
    var singaraCost = singara*7;
    var samuchaCost = samucha*10;
    var jilapiCost = jilapi*15;
    var totalCost = singaraCost + samuchaCost + jilapiCost;
    return totalCost;
}

var totalCost = pandaCost(2,1,3);
console.log(totalCost);




// var singara=3
// var samucha=2
// var jilapi=2
// var singaraCost = singara*7;
// var samuchaCost = samucha*10;
// var jilapiCost = jilapi*15;
// var totalCost = singaraCost + samuchaCost + jilapiCost;
// console.log(totalCost)



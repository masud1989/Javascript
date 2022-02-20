const numbers = [4, 6, 8, 10, 12];
const output2 = [];

// function in old system 
/*
function doubleOld(number){
   return number * 2;
}
*/

// function arrow system 
const doubleIt = number => number * 2;
    for (const number of numbers){
        const result = doubleIt(number)
        output2.push(result);
    }
// console.log(output);

const output = numbers.map(doubleIt);
const square = numbers.map(x = x => x * x );
const triple = numbers.map(x = x => x * 3 );

console.log(output);
console.log(square);
console.log(triple);
// var number = 5;
// constant reminder = number % 2;
// console.log(reminder == 0)




// Finding Even Number 
// ---------------------------------------------------
// const number = 101; 
// function isEven(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// }

// const myNumber = 1550;
// const isMyNumberEven = isEven(myNumber);
// console.log('Is myNumber Even :', isMyNumberEven);

// const herNumber = 1553;
// const isHerNumberEven = isEven(herNumber);
// console.log('Is myNumber Even :', isHerNumberEven);


// Finding Odd Number 
// ---------------------------------------------------



// const number = 101;
// function isOdd(number){
//     if(number % 2 != 0){
//         return true;
//     }
//     return false;
// }

// const myNumber = 1551;
// const isMyNumberOdd = isOdd(myNumber);
// console.log('Is myNumber Odd :', isMyNumberOdd);

// const herNumber = 1556;
// const isHerNumberOdd = isOdd(herNumber);
// console.log('Is myNumber Odd :', isHerNumberOdd);



//Finding  Leap Year 
// -----------------------------------------------------------------------------

function leapYear(year){
    if(year % 4 == 0 ){
        return 'Yes, It is Leapyear';
    }
    else{
        return 'Sorry, It is  not Leapyear';
    }
}

var myYear = 2024;
var isMyYearLeapyear = leapYear(myYear);
console.log('Is my year Leap Year : ', isMyYearLeapyear);

var herYear = 2030;
var isHerYearLeapyear = leapYear(herYear);
console.log('Is her year Leap Year : ', isHerYearLeapyear);
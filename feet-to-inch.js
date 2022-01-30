// Converting Feet to Inch, Inch to Feet using function
//================================================================


// Converting Inch to Feet
function inchToFeet (inches){
    var feet = inches / 12;
    return feet;
}

var myInches = 144;
var feet = inchToFeet (myInches);
console.log('The Converted vale of Inch: ', feet);




// Converting Feet to Inch
function feetToInch (feet){
    var inch = feet * 12;
    return inch;
}

var myFeet = 12;
var inch = feetToInch (myFeet);
console.log('The Converted vale of Feet: ', inch); 


// Converting Mile to Kilometer
function mileToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var myMiles = 10;
var myKm = mileToKm(10);
console.log('The Converted vale of Miles: ', myKm);
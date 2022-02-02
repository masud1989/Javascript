// Finding Largest Number from an Array  
// ------------------------------------------------------------------------------

function largestElement(numbers){
    let largest = numbers[0];
    for(i=0; i<numbers.length; i++){
        const element = numbers[i];
        if (element>largest){
            largest = element;
        }

    }
    return largest;   
};

var numbers = [15, 25, 36, 42, 83, 105, 120];
var myLargest = largestElement(numbers);
console.log('The Largest number of the Array is:', myLargest);



// Finding Lowest Number from an Array  
// -------------------------------------------------------------------------
function lowestElement(numbers){
    let lowest = numbers[0];
    for(i=0; i<numbers.length; i++){
        const element = numbers[i];

        if(element<lowest){
            lowest = element;
        }
    }
    return lowest;
};

var numbers = [15, 25, 36, 42, 83, 105, 120, 7];
lowest = lowestElement(numbers);
console.log('The Lowest number of the Array is:', lowest);


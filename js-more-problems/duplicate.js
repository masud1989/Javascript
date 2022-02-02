// Remove Duplicate Element from an Array 
// --------------------------------------------------------------------------------------

const names = ['rubel', 'polash', 'imran', 'abdullah', 'rubel', 'polash' ];
function removeDuplicate(names){
    const unique = [];
    for (const element of names){
        console.log(element);
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

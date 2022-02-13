// console.log('I am in a separate file')
function updateCaseQuatity(isPlus){
    const caseInput = document.getElementById('case-quantity');
    const caseQuantity = parseInt(caseInput.value);
    if(isPlus){
        caseInput.value = caseQuantity + 1;
    } 
    else{
        caseInput.value = caseQuantity - 1;
    }
    
}

document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseQuatity(true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseQuatity(false);
})
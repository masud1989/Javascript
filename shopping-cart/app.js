// console.log('I am in a separate file')
function updateCaseQuatity(isPlus){
    const caseInput = document.getElementById('case-quantity');
    let caseQuantity = caseInput.value;
    if(isPlus == true){
        caseQuantity = parseInt(caseQuantity) + 1;
    } 
    else if(caseQuantity > 0){
        caseQuantity = parseInt(caseQuantity) - 1;
    }
    // update case Total
    caseInput.value = caseQuantity;
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseQuantity * 59;
    
}

document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseQuatity(true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseQuatity(false);
})
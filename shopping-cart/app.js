// console.log('I am in a separate file')
function updateProductQuatity(product, price, isPlus){
    const productInput = document.getElementById(product+ '-quantity');
    let productQuantity = productInput.value;
    if(isPlus == true){
        productQuantity = parseInt(productQuantity) + 1;
    } 
    else if(productQuantity > 0){
        productQuantity = parseInt(productQuantity) - 1;
    }
    // update Total
    productInput.value = productQuantity;
    const caseTotal = document.getElementById(product+ '-total');
    caseTotal.innerText = productQuantity * price;  
}
// Handle phone plus minus
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductQuatity('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductQuatity('phone', 1219, false);
})

// Handle Case plus minus
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductQuatity('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductQuatity('case', 59, false);
})
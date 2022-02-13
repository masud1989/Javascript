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
    const productTotal = document.getElementById(product+ '-total');
    productTotal.innerText = productQuantity * price;  
    //Calculate Total
    calculateTotal();
}

function getQuantity(product){
    const productInput = document.getElementById(product+'-quantity');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}
function calculateTotal(){
    const phoneTotal = getQuantity('phone') * 1219;
    const caseTotal = getQuantity('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal * 0.1;
    const total = subTotal + tax;

    // update on html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
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


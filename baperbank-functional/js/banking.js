function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inpuAmountText = inputValue.value;
    const inputAmount = parseFloat(inpuAmountText);
    // reset deposite input value 
    inputValue.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, inputAmount){
    const amountExist = document.getElementById(totalFieldId);
    const amountExistText = amountExist.innerText;
    const existAmount = parseFloat(amountExist.innerText);

    amountExist.innerText = inputAmount + existAmount;
}

function updateBalance(depositeAmount, isDeposite){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalExist = parseFloat(balanceTotalText);
    if(isDeposite == true){
        balanceTotal.innerText = balanceTotalExist + depositeAmount; 
    }
    else{
        balanceTotal.innerText = balanceTotalExist - depositeAmount; 
    }   
}

// deposite option 
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmount = getInputValue('deposite-amount');
    updateTotalField('deposite-total', depositeAmount);
    // update balance 
    updateBalance(depositeAmount, true);
});


// withdraw option 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withDrawAmount = getInputValue('withdraw-amount');
    updateTotalField('withdraw-total', withDrawAmount);
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    updateBalance(withDrawAmount, false);
})
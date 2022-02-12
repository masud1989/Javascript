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

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalExist = parseFloat(balanceTotalText);
    return balanceTotalExist;
}

function updateBalance(depositeAmount, isDeposite){
     const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalExist = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
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

    if(depositeAmount > 0){
        updateTotalField('deposite-total', depositeAmount);
        // update balance 
        updateBalance(depositeAmount, true);
    }
    else{
        alert("Please Input Positive Number..");
    }
});


// withdraw option 
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withDrawAmount = getInputValue('withdraw-amount');
    const currentBalace = getCurrentBalance();

    if(withDrawAmount > 0 && withDrawAmount < currentBalace ){
        updateTotalField('withdraw-total', withDrawAmount);
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    updateBalance(withDrawAmount, false);
    }
    else{
        alert("Please Input Positive Number lower than Your Balance..");
    }
})
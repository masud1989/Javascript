function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const inpuAmountText = inputValue.value;
    const inputAmount = parseFloat(inpuAmountText);
    // reset deposite input value 
    inputValue.value = '';
    return inputAmount;
}


// deposite option 
// ===============================================================================
document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeAmount = getInputValue('deposite-amount');
    const depositeExist = document.getElementById('deposite-total');
    const depositeExistText = depositeExist.innerText;
    const depositeExistAmount = parseFloat(depositeExist.innerText);
    depositeExist.innerText = depositeAmount + depositeExistAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalExist = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalExist + depositeAmount; 
});

// withdraw option 
// ===============================================================================
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withDrawAmount = getInputValue('withdraw-amount');
    const withDrawExist = document.getElementById('withdraw-total');
    const withDrawExistText = withDrawExist.innerText;
    const withDrawExistAmount = parseFloat(withDrawExistText);
    withDrawExist.innerText = withDrawExistAmount + withDrawAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalExist = parseFloat(balanceTotalText);
    balanceTotal.innerText = balanceTotalExist - withDrawAmount;
})
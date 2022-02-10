// Handle Deposite Event 
// =========================================================================
document.getElementById('deposite-btn').addEventListener('click', function(){
                                                         // console.log('button clicked..')
    const depositeInput = document.getElementById('deposite-amount');
    const depositeAmount = depositeInput.value;
                                                         // console.log(depositeAmount);
    const depositeTotal = document.getElementById('deposite-total');
    depositeTotal.innerText = depositeAmount;
    depositeInput.value = '';
})
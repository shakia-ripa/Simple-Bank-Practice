document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    if(( !withdrawAmount)){
        alert('Withdraw Amount should be greater than 0');
        return;
    }
    else if((withdrawAmount > balanceTotal)){
        alert('You do not have sufficient balance to withdraw');
    }

    else{
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalElement.innerText);

    withdrawTotalElement.innerText = withdrawAmount + withdrawTotal;
    withdrawField.value = '';

    balanceTotalElement.innerText = balanceTotal - withdrawAmount;
    }

})
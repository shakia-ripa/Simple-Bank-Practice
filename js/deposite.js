document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = parseFloat(depositeField.value);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);
    if (!depositeAmount) {
        alert('Diposite Amount should be greater than 0');
        return;
    }
    else {
        const depositeTotalElement = document.getElementById('deposite-total');
        const depositeTotal = parseFloat(depositeTotalElement.innerText);
        
        depositeTotalElement.innerText = depositeAmount + depositeTotal;
        depositeField.value = '';

        balanceTotalElement.innerText = depositeAmount + parseFloat(balanceTotal);
    }
})
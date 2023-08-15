document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField =  document.getElementById('deposite-field');
    const depositeAmount = depositeField.value;
    
    const depositeTotalElement = document.getElementById('deposite-total');
    const depositeTotal = depositeTotalElement.innerText;

    depositeTotalElement.innerText = parseInt(depositeAmount) + parseInt(depositeTotal);
    depositeField.value = '';
})
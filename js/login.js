// Step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // Step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // DANGER: Do Not Verify email password on the client side

    // Step-4: verify email and password
    if(email === 'shakiaripa@gmail.com' && password === '912219'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Wrong Password');
    }
})
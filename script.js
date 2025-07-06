    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    const form = document.getElementById('form');

    // error
    const nameError =document.getElementById('nameError');
    const emailError =document.getElementById('emailError');
    const passwordError =document.getElementById('passwordError');
    const CPasswordError =document.getElementById('CPasswordError');
    const registerDone =document.getElementById('registerDone');
    // regax
    const emailRegax = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const passwordRegax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;
    form.addEventListener('submit',(event)=>{
        let isValid = true;
        if(username.value === '' || username.value == null){
            event.preventDefault();
            nameError.innerHTML = 'Name is required';
            isValid = false;
        }
        else{
            nameError.innerHTML = '';
        }
        // email
        if(!email.value.match(emailRegax)){
            event.preventDefault();
            emailError.innerHTML = 'Valid email is required';
            isValid = false;
            
        }
        else{
            emailError.innerHTML = '';
        }
        // password
        if(!password.value.match(passwordRegax)){
            event.preventDefault();
            passwordError.innerHTML = 'Password must be at least 8 characters long, no more then 15 characters include at least one uppercase letter, one lowercase letter, one number, and one special character.';
            isValid = false;
        }
        else{
            passwordError.innerHTML = '';
        }
        if(password.value !== confirmPassword.value){
             event.preventDefault();
            CPasswordError.innerHTML = 'password not matched';
             isValid = false;
        }else{
            CPasswordError.innerHTML = '';
        }
          if (!isValid) {
        event.preventDefault();
        }
        else{
            event.preventDefault();
            registerDone.innerHTML = 'Rgister Successfully Done';
             
        }
    })


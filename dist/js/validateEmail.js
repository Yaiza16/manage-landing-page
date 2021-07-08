export default function validateEmail(){
    const form = document.getElementById('form')
    const email = document.getElementById('email');
    const errorMessage = document.getElementById('error-message')
    const message = {
        valid: 'Valid email. Check your inbox',
        invalid: 'Please insert a valid email'
    }

    form.addEventListener('submit', e =>{
        e.preventDefault()

        // Set email and message classes 
        setClass();

        let emailValue = email.value;

        if (!isEmail(emailValue) || isEmailEmpty(emailValue)){
            errorMessage.classList.remove('form-error-message--hidden');
            errorMessage.classList.add('form-error-message--invalid')
            errorMessage.innerHTML = message.invalid;
            email.classList.add('form-input--invalid')
        }else{
            errorMessage.classList.remove('form-error-message--hidden');
            errorMessage.classList.add('form-error-message--valid')
            errorMessage.innerHTML = message.valid;
            email.classList.add('form-input--valid')
        }
    })

    email.addEventListener('keyup', () =>{
        let emailValue = email.value;
        if (isEmailEmpty(emailValue)){
            setClass();
        }
    })


    function isEmail(email){
        const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email) ;
    }

    function isEmailEmpty(email){
        if(email === "" || email === null){
            return true
        }else{
            return false;
        }
    }

    function setClass(){
        if (email.clasName != 'form-input'){
            email.className = 'form-input';
        }
        if (errorMessage.className != 'form-error-message form-error-message--hidden'){
            errorMessage.className = 'form-error-message form-error-message--hidden'
        }
    }

}
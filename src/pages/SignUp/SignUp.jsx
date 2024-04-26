import { useState } from 'react'
import {signUp} from '../../services/signUp.js'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';


const SignForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const history = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(isFormValid()) {
            console.log('s')
            const usuario = {name:fullName,email:email,password:password}
            const añadirUsuario = await signUp(usuario)
            const {token,messae,username} = añadirUsuario 
                if(messae == 'User already exits'){ 
                    alert(añadirUsuario.messae)
                } else {
                    localStorage.setItem("token", token)
                    localStorage.setItem("nombre", username)  
                    console.log(username,token,messae)
                    alert('You are IN!')
                    history('/');

            }     
        } else {
        alert('Rellena los campos de manera correcta')
        }
                  
    }

    const isFormValid = () => {
        return validateEmail() && 
        validatePassword() && validateConfirmPassword() &&
         isChecked  !== '' &&
         stylefullNameLength();
    }
    const validateConfirmPassword = () => {
        return confirmPassword === password;
    }
    const styleConfirmPassword = () => {
        if (confirmPassword === '') {
            return '';
        } else {
            return validateConfirmPassword() ? 'valid' : 'invalid';
        }
    }
 
    function checkboxClicked(event) {
        setIsChecked(event.target.checked)
    }  

    const validateEmail = () => {
        return /[a-z0-9]@gmail.com$/.test(email);
    }
    
    const validatePassword = () => {
        return password.length > 5
    }
    
    const stylefullName = () => {
        if (fullName === '') {
            return ''
        }
    }
    const stylefullNameLength = () => {
        return fullName.length > 3
    }
        
    const styleEmail = () => {
        if (email === '') {
            return ''
        } else {
            return validateEmail() ? 'valid' : 'invalid'
        }
    }
    
    const stylePassword = () => {
        if (password === '') {
            return ''
        } else {
            return validatePassword() ? 'valid' : 'invalid'
        }
    }
    

    return (
        <div className='container' id="container">
            <div className='form-container sign-up-container'></div>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
                <input type="text" placeholder= "Full Name" className={stylefullName()} value={fullName} onChange={(e) => setFullName(e.target.value)} />
                <br/>
                <input type="email" placeholder= "Email" className={styleEmail()} value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
                <input type="password" placeholder="Password" className={stylePassword()} value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
                <input type="password" placeholder="Confirm Password" className={styleConfirmPassword()} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        
            <br/>
            <label>
                Agree to terms and conditions
                <input type="checkbox" checked={isChecked} onChange={(event) => checkboxClicked(event)} />
            </label>
            <br />
            <button type="submit">
                SIGN UP
            </button>

        </form>
        </div>
    )

}

export default SignForm




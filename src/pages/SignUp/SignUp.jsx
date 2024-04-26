import { useState } from 'react'
import {signUp} from '../../services/signUp.js'
import './SignUp.css'
import { useNavigate,Link} from 'react-router-dom';


const SignForm = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const history = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if( password.length > 5 && 
            password == confirmPassword && 
            isChecked == true &&
            fullName.length > 3 &&
            validateEmail()) {

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
    const checkboxClicked = () => {
        setIsChecked(true);
    }
    const validateEmail = () => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
   

    return (
        <section className='container' id="container">
            {/* Imagen del Sign Up */}
            <div className='imagen_signUp'>
            </div>
            {/*  */}
        <div>
            <div className='moverBoton'>
               <Link to='/Login'> <button type="button" className='Login_Button'>
                    Login
                </button></Link>
            </div>
            <form onSubmit={handleSubmit} className='form_SignUp'>
                <label className='labels_SignUp'>FULL NAME </label>
                <input type="text" className='input_SignUp' placeholder= "Enter your full name"  value={fullName} onChange={(e) => setFullName(e.target.value)} />
           
                    <br/>
                <label className='labels_SignUp'>E-MAIL </label>
                <input type="email" className='input_SignUp' placeholder= "Enter you e-mail address"  value={email} onChange={(e) => setEmail(e.target.value)} />
           
                    <br/>
                <label className='labels_SignUp'>PASSWORD</label>    
                <input type="password" className='input_SignUp' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br/>

                <label className='labels_SignUp'>CONFIRM PASSWORD</label> 
                <input type="password" className='input_SignUp' placeholder="Confirm Password"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <br/> 
                <div className='agree'>
                    <input type="checkbox" className='check' checked={isChecked} onChange={(event) => checkboxClicked(event)} />
                    <label className='label_checkbox'> By signing you are agree Terms & Conditions</label>
                </div>
                <br />
            
                <button type="submit" className='SignUp_Button'>
                    Sign Up
                </button>
            </form>
        </div>
        </section>
    )

}

export default SignForm




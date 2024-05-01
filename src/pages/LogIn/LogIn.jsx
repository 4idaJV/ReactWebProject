import './LogIn.css'
import {useState} from 'react'
import { logIn } from '../../services/logIn.js'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Logear = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate();

    const handleLogIn = async (e) => {
        e.preventDefault()
        console.log("hola")
        if(validatePassword() && validateEmail()){
            const user = {email:email, password:password}
            const logearUsuario = await logIn(user)
            const {token,id,nombre} = logearUsuario
            console.log(logearUsuario)
            localStorage.setItem("token",token)
            localStorage.setItem("id",id)
            localStorage.setItem("name",nombre)
            alert('Bienvenido')
            history('/');
        } else {
            alert('No se ha encotrado al usuario')
        } 
    }

    const validatePassword = () => {
        return password.length > 5
    }
   const validateEmail = () => {
    return /[a-z0-9]@gmail.com$/.test(email);
  };


  function handleSignUp(){
    history('/signup');
}

  return (
    <section className='container' id="container">
         <div className='imagen_signUp2'>
        </div>


        <form className='form_LogIn' onSubmit={handleLogIn}>
            <div className="button-container">
                <button className="login-button">Login</button>
                <button className="signin-button" onClick={handleSignUp}>Sign Up</button>
            </div>

            <label className='labels_SignUp'>E-MAIL </label>
            <input type="email" placeholder= "Enter you e-mail address" className='input_SignUp'  value={email} onChange={(e) => setEmail(e.target.value)} />
                <br/>
            <label className='labels_SignUp'>PASSWORD</label>
            <input type="password" placeholder="xxxxxxxxxxxxxxxxxxxs" className='input_SignUp' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br/>
            <div className='agree'>
                <input type="checkbox" className='check'/>
                <label className='label_checkbox'> By signing you are agree Terms & Conditions</label>
            </div>

            <button type="submit" className='SignUp_Button'>
                Log In
            </button>
       
        </form>
    </section>
  )
}

export default Logear

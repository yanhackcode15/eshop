import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
// import {loginUser, createUser} from './Firebase'
import './Login.css'

const signUpPath = process.env.REACT_APP_SERVER_URL_PROD+'/signup'
const signInPath = process.env.REACT_APP_SERVER_URL_PROD+'/signin'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const signIn = (e)=>{
        e.preventDefault();

        const request = new Request(
            signInPath, 
            {
                method: 'POST', 
                body: JSON.stringify({email: email, password: password}),
                headers: { 
                    "Access-Control-Allow-Origin": signInPath,
                    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                    "Content-Type": "application/json" 
                }
            })

    
        fetch(request)
        .then(res=>{
            let code = res.status
            if (code===200){
                navigate('/');
            }
            else if (code===406)
            {
                return res.text()
                throw new Error(`sign in didn't work! ${code}` );     
            }
            else {
                throw new Error("sign in didn't work!"); 
            }

        })
        .then(msg=>{
            if (msg&&!!msg.length){
                throw new Error(`Sign up didn't work ${msg}`)}     
        })
        .catch(error=>alert(error.message))
 
    }

    const register = (e)=>{
        e.preventDefault();
        const request = new Request(
            signUpPath, 

            {
                method: 'POST', 
                body: JSON.stringify({email: email, password: password}),
                headers: { "Content-Type": "application/json" }
            })

    
        fetch(request)
        .then(res=>{
            let code = res.status
            if (code===200){
                navigate('/');
            }
            else if (code===406)
            {
                return res.text()
            }
            else {
                throw new Error("sign up didn't work!"); 
            }
        })
        .then(msg=>{
            if (msg&&!!msg.length){
                throw new Error(`Sign up didn't work ${msg}`)}     
            }
        )
        .catch(error=>alert(error.message))
        
    }

    return (
        <div className="login__page">
            <div className='login__logo'>
                <Link to="/"><StorefrontIcon className="header__logoImage" fontSize="large" /></Link>
                <Link to="/"><h2 className="header__logoTitle">eShop</h2></Link>
            </div>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form className="form__login">
                    <h5 className='email'>Email</h5>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <h5 className='password'>Password</h5>
                    <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    <button type='submit' className='login___signInButton' onClick={signIn}>Sign In</button>
                </form>
                <button className='login__newAccount' onClick={register}>Create New Account</button>

            </div>
        </div>
    )
  
}

export default Login

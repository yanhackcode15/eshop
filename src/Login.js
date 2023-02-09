import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
// import {loginUser, createUser} from './Firebase'
import './Login.css'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const signIn = (e)=>{
        e.preventDefault();

        const request = new Request(
            'http://localhost:8000/signin', 

            {
                method: 'POST', 
                body: JSON.stringify({email: email, password: password}),
                headers: { "Content-Type": "application/json" }
            })

    
        fetch(request)
        .then(res=>{
            return res.text()
        })
        .then(text=>{
            console.log(text)
            navigate('/')
        })
        .catch(error=>alert(error.message))
 
    }

    const register = (e)=>{
        e.preventDefault();
        const request = new Request(
            'http://localhost:8000/signup', 

            {
                method: 'POST', 
                body: JSON.stringify({email: email, password: password}),
                headers: { "Content-Type": "application/json" }
            })

    
        fetch(request)
        .then(res=>{
            return res.text()
        })
        .then(text=>{
            console.log(text)
            navigate('/')
        })
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

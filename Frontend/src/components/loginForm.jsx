import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from './hero'

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const send = async(event) => {
        event.preventDefault()
        //SEND MESSAGE TO API HERE

        
        setEmail('')
        setPassword('')
    }
    return (
        <div className='formBackground'>
            <div className='formContainer'>
                <div className='backCol'>
                    <Link to='/'><p>Back</p></Link>
                </div>
                <div className='innerFormContainer'>
                    <div className='formHeader'>
                        <p>| Login</p>
                    </div>
                    <form className="form" onSubmit={send}>
                        <p>Email: 
                            <input 
                            required 
                            className="inputField" 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                        </p>
                        <p>Password: 
                            <input 
                            required 
                            className="inputField" 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            />
                        </p>
                        <button type='submit'>Submit</button>
                        </form>

                </div>
            </div>
        </div>
    )
}

export default LoginForm
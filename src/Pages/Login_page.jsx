// Project #1 log in page 09/23/2023

import React, { useState } from 'react'
import '../Styles/loginStyles.css'

function Login_page() {

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    //onClick handle submit function 
    function handleSubmit(e) {
        e.preventDefault();
        alert(" Welcome " + username)
        console.log(password)
    
    }

    // JSX code that the login page is rendering when this page is called in App.jsx
  return (
    <>
        {/* Holds the login container the WHOLE page */}
        <div>

            {/* Holds the login page */}
            <form className='login_container'>

            {/* username input & label */}
                <div className='username_container'>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        placeholder='Username'
                        value= {username}
                        onChange={event => setUserName(event.target.value)}
                        
                        />
                </div>

                <br />

            {/* password input & label */}
                <div className='password_container'>
                    <label>Password:</label>
                    <input 
                        type="password"
                        placeholder='Password'
                        value= {password}
                        onChange={event => setPassword(event.target.value)}
                        
                    />
                </div>

                <br />

            {/* submit button  */}
                <button className= "submit_Button" type="submit" onClick={handleSubmit} >Submit</button>

            </form>
        </div>
    </>
  )
}

export default Login_page
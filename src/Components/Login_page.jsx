// Project #1 log in page 09/23/2023

import React, { useState } from 'react'
import '../Styles/LoginStyles.css'

function Login_page() {

    //username and password use state
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    //manages a person user once logged in
    const [user, setUser] = useState()

    //onClick handle submit function 
    //an asynchronous handleSubmit function to process the login request

    /* What this function will do
        1. send the login details to the server
        2. if the request is successfull , store the user information in localstorage
        and set the state of the user
     */
    const handleSubmit = async e => {
        e.preventDefault();


        if (username == username && password == password) {
            // Store the user's session information in localStorage
            //localStorage.setItem("isLoggedIn", true);
      
            // Redirect the user to the home page
            window.location.href = "/";
          } else {
            // Display an error message
            alert("Invalid username or password");
          }
    
    }

    //if statement that is theres a user show the following 
    //displays a user.name is logged in message if we have a user, 
    //and the login form if we do not have a user.

    if (user) {
        return <div>{user.name} is logged in</div>
    }
    
    // JSX code that the login page is rendering when this page is called in App.jsx
  return (
    <>
        {/* Holds the login container the WHOLE page */}
        <div className="page_container">

            {/*  */}
            <h1>Welcome, please login! </h1>

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
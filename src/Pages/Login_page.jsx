import React, { useState } from 'react'


function Login_page() {

    //onClick handle submit function 
    function handleSubmit(e) {
        e.preventDefault();
        alert("Submit has been clicked!")
    
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
                    <input type="text" placeholder='Username'/>
                </div>

                <br />

            {/* password input & label */}
                <div className='password_container'>
                    <label>Password:</label>
                    <input type="password" placeholder='Password'/>
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
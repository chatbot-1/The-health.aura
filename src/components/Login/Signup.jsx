import React from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"

const Signup = () => {
  return (
    <div className='signup section'>
      <div className='signup-container container'>
        <div className='signup-content'>
          <h1 className='title '>Sign Up</h1>

          <div className='signup-data'>

            <form action='#'>
              <div className='inputs'>
                <input type='text' placeholder='first name' className='input'/>
                <input type='text' placeholder='last name' className='input'/>
                <input type='email' placeholder='email' className='input'/>
                <input type='password' placeholder='password' className='input'/>
                <input type='password' placeholder='re-enter the password' className='input'/>
              </div>
              <div className='cred'>
                <button className='signup-button'>Register</button><br/>
              </div>
              <div className='signup-with'>
                <p className='title'>or</p>
                <button><i class="uil uil-google"></i> Sign up with Google</button>
                <button><i class="uil uil-facebook"></i> Sign up with facebook</button>
                <p className='dont'>
                  Already have an acount ? 
                  <Link to="/login"><a href='#'> Sign In</a></Link>
                </p>
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Signup
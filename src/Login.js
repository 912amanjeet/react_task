import React from 'react';

function Login() {
    return (
        <form>
        <h1>Hello</h1>
        <p >Enter your name:</p>
        <input
          type="text"
          style={{width:200}}
        />
        <p>Enter your Password:</p>
        <input
          type="text"
          style={{width:200}}
        />
       
      </form>
    )
  
   
  }
  
  export default Login;
import React from 'react';
import "./form.css";
/* import "./App.css"; */

function Login(){
    return(
        
        <div className="Login">

            <h1>Login</h1>

            <form>
                <label>
                    Username:
                <input type="text" name="name" />
                </label>
                <p></p>
                <label>
                    Password:
                <input type="text" name="password" />
                </label>
                <p></p>
                <input type="submit" value="Submit" />
            </form>

        </div>


    )
}   

export default Login;
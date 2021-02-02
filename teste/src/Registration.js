import React, {useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";

/* import "./form.css"; */
/* import "./App.css"; */


function Registration(){

const[Nome,setNome]=useState("");
const[password,setpassword]=useState("");



const history = useHistory();
useEffect(() =>{
    if(localStorage.getItem("user-info")){
        history.push("./login")
    }
},[])


async function Register(){

console.warn(Nome,password)
let item={Nome,password};
let result = await fetch("https://apipw2.herokuapp.com/Utilizadores",{
    method:'POST',
    headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
    body:JSON.stringify(item)
    });
    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    history.push("./login")

}
    return(
        
        <div className="Registration">

            <h1>Registration</h1>

            <form>
                <div>
                Username: 
                    <input type="text" placeholder="nome"
                     onChange={(e) => setNome(e.target.value)} className="nome"></input>
                </div>
                <br></br>
                <div>
                Password: 
                    <input type="text" placeholder="password"
                    onChange={(e) => setpassword(e.target.value)} className="password"></input>
                </div>
                <br></br>
                <button onClick={Register} className="botão">Sign Up</button>
            </form>

        </div>


    )
}   

export default Registration;


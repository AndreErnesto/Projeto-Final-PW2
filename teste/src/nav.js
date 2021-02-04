import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    const NavStyle = {
        color:'#49F2C2'
    }
    return(
        
        <nav>
            <ul className="nav-links">
                <Link style={NavStyle} to="/RecipesPage">
                <img src="/images/recipes.png"></img>
                </Link>
                <Link style={NavStyle} to="/Favorites">
                    <img src="/images/heart.png"></img>
                </Link>
                <Link style={NavStyle} to="/Registration">
                    <img src="/images/registration.png"></img>
                </Link>
                <Link style={NavStyle} to="/login">
                    <img src="/images/login.png"></img>
                </Link>
            </ul>
        </nav>


    )
}   

export default Nav;
/* import React, { Component } from 'react'
import axios from 'axios'
import "./form.css"
import style from './recipe.module.css'

class PostRecipe extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
            calories: '',
            image:"",
            ingredients:""
		}
	}


	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('/Favoritos', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const {title,calories,image,ingredients} = this.state
            return(
               <div className={style.recipe}>
                   <h1>{title}</h1>
                   <ol>
                       {ingredients.map(ingredient=>(
                           <li>{ingredient.text} </li>
                       ))}
                   </ol>
                   <p>{calories}</p>
                   <img src={image} alt=""></img>
                   <button className="favorites" type="submit" onSubmit={this.submitHandler}>Add to favorites</button>
               </div>     
            );
        }
        
}



export default PostRecipe    */
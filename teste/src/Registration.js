import React, { Component } from 'react'
import axios from 'axios'
import "./form.css"

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Nome: '',
			password: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('/Utilizadores', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { Nome,password} = this.state
		return (
			<div>
				<h1>Registration</h1>
				<form className="form" onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="Nome"
							placeholder="Nome"
							value={Nome}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="password"
							placeholder="Password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm


import React from 'react';
import "./favorites.css"

class GetFavorites extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('/Favoritos')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div className="loading">Loading...</div>;

        return (
            <div className="favorites">
                <h1 className="titulo">Favoritos</h1>
                <ul>
                    {items.map(item => (
                        <li className="favoritos">
                            <h1>Favorito número: {item.Favoritos}</h1>
                            <br></br>
                            <h3>Titulo: {item.Title}</h3>
                            <br></br>
                            <h3>Calorias:{item.Calories}</h3>
                            <br></br>
                            <h3>Ingredientes:{item.ingredients}</h3>
                            <br></br>
                            <h3>Imagem:{item.Img}</h3>
                        </li>   
                    ))}
                </ul>
            </div>
        );

    }

}

export default GetFavorites;
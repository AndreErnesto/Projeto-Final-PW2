import "./homePage.css";
import "./App.css";
import Nav from "./nav";
import Login from "./login";
import Registration from "./Registration";
import Recipes from "./RecipesPage";
import Favorites from "./Favorites";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

  function App(){
  return(
      
    <div className="App">
      <Router>
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/RecipesPage" component={Recipes}></Route>
          <Route path="/Registration" component={Registration}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Favorites" component={Favorites}></Route>
        </Switch>
      </Router>
      </div>
       );
    }


    const Home = () =>(

      <div>
        <h1>Recipies</h1>
        <h2>Search for your favorite food and get the best recipies</h2>
        <img src="/Images/food.png"></img>
        <h4>Click on the list and search for your recipe and feels free to create an account</h4>

      </div>

    );
export default App;
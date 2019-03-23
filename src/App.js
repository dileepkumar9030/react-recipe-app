import React, { Component } from "react";
import "./App.css";

import Form from "./components/Form";

const API_KEY = "f3ac2c8e0362675ac11bdc659df47812";

class App extends Component {
  state = {
    recipe: []
  };

  getRecipe = async e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const response = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`
    );
    const data = await response.json();

    this.setState({
      recipe: data.recipes
    });

    console.log(this.state.recipe);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;

import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/Menu/Menu';
import './App.css';
import { DISHES } from './shared/dishes'

class App extends React.Component {
  state = {
    dishes: DISHES,
  };
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }


}

export default App;

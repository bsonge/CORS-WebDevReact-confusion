import React from "react";
import Home from '../Home/Home.js';
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import DishDetail from '../DishDetail/DishDetail.js';
import { DISHES } from '../../shared/dishes.js'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };    
  }


  render() {

    const HomePage = () => {
      return(
        <Home />
      )
    } 

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

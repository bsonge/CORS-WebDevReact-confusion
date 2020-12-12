import React from "react";
import Home from '../Home/Home.js';
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import DishDetail from '../DishDetail/DishDetail.js';
import Contact from '../Contact/Contact';
import { DISHES } from '../../shared/dishes.js'
import { COMMENTS } from '../../shared/comments.js'
import { LEADERS } from '../../shared/leaders.js'
import { PROMOTIONS } from '../../shared/promotions.js'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };    
  }


  render() {

    const HomePage = () => {
      return(
        <Home 
          dish={this.state.dishes.filter(dish => dish.featured)[0]} 
          promotion={this.state.leaders.filter(promo => promo.featured)[0]} 
          leader={this.state.promotions.filter(leader => leader.featured)[0]} 
          />
      )
    } 

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

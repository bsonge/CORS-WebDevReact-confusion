import React from "react";
import Home from '../Home/Home.js';
import Menu from '../Menu/Menu.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import DishDetail from '../DishDetail/DishDetail.js';
import Contact from '../Contact/Contact';
import About from '../About/About';
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

    const DishWithId = ({match}) => {
      return(
        <DishDetail 
          dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))}
        />
      );
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;

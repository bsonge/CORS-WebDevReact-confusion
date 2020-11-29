import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from '../DishDetail/DishDetail.js';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }


    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay style={{color: 'white', background: "linear-gradient(180deg, rgba(0,0,0,0.5321691176470589) 0%, rgba(0,0,0,0.5181635154061625) 12%, rgba(254,226,166,0) 13%, rgba(253,187,45,0) 100%)"}}>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;
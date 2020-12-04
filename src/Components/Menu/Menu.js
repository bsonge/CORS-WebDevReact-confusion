import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 mt-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
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
            </div>
        );
    }
}

export default Menu;
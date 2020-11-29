import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';


// import { ListGroup, ListGroupItem } from 'reactstrap';

export default class DishDetail extends Component {
    // constructor(props) {
    //     super(props);
    //     //PROPS: dish = dish object
    //     this.state = {
    //         DISH: null,
    //     }
    // }

    // componentDidMount() {
    //     this.setState({DISH: this.props.dish});
    // }

    renderDish(dish) {
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dish) {
        return (
            <div>
                <h4>Comments</h4>
                <ListGroup>
                {
                    dish.comments.map((comment) => {
                        const d = new Date(comment.date);
                        const format = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit'  }).format(d);
                        let date = `${format}`;
                        return (
                        <ListGroupItem>
                            <div>{comment.comment}</div>
                            <div> - {comment.author} <span style={{color: 'darkgrey'}}>{date}</span></div>
                        </ListGroupItem>
                        )
                    }) 
                }
                </ListGroup>

            </div>

        );
    }

    render() {
        if(this.props.dish !== null) {
            return (
                <div className="row">
                    <div className="col-md-5 col-sm-12 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-md-5 col-sm-12 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            )
        } else {
            return <div>empty!</div>;
        }


    }

}
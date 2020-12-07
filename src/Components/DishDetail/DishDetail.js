import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


// import { ListGroup, ListGroupItem } from 'reactstrap';


function RenderDish({dish}) {
    return(
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle><h5>{dish.name}</h5></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({comments}) {
    if (comments !== null) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled"> 
                {
                    comments.map((comment) => {
                        const d = new Date(comment.date);
                        let formatted_date = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit'  }).format(d);
                        return (
                        <li>
                            <div>{comment.comment}</div>
                            <div> - {comment.author} <span style={{color: 'darkgrey'}}>{formatted_date}</span></div>
                        </li>
                        )
                    }) 
                }
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <h4>Comments</h4>
                <div style={{color: 'darkgrey'}}>There's nothing here...</div>
            </div>
        );
    }
}

const DishDetail = (props) => {
    if(props.dish !== null && props.dish !== undefined) {
        return (
            <div className="row" style={{
                backgroundColor: '#eeeeee',
                }}>
                <div className="col-md-5 col-sm-12 m-1" >
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-md-5 col-sm-12 m-1" >
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        )
    } else {
        return <div style={{color: 'darkgrey'}}>Click on a menu item to see the details!</div>;
    }
}


export default DishDetail;
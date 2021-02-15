import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//functional component
function RenderMenuItem({ dish }) {
    return (
        <Card key={dish.id} >
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay style={{color: 'white', background: "linear-gradient(180deg, rgba(0,0,0,0.5321691176470589) 0%, rgba(0,0,0,0.5181635154061625) 12%, rgba(254,226,166,0) 13%, rgba(253,187,45,0) 100%)"}}>
                    <CardTitle><h5>{dish.name}</h5></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

//functional compoonent v2
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 mt-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>                        
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;
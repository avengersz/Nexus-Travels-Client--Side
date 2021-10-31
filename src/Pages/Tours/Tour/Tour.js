import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const{name, cost, description, img, _id}= props.tour
    return (
        <div>
              <Col>
      <Card className="rounded-5 mx-2 mb-3">
        <Card.Img style={{height: '300px', width: '480px'}} className="p-3 rounded-5" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          ${cost}/per person
          </Card.Text>
          <Card.Text>
          {description.slice(0, 150)}
          </Card.Text>
          <Link to={`/tours/${_id}`}> <button className="btn btn-primary"><i class="fas fa-shopping-cart"></i> Book now</button></Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Tour;
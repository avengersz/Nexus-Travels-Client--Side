import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
   <Carousel>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://i.ibb.co/7b36tyv/Landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Nexus Travels</h3> 
     
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://i.ibb.co/tq7JVx6/eberhard-grossgasteiger-y2az-Hvup-CVo-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Nexus Travels</h3> 
      
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://i.ibb.co/Ksb4xtx/robert-lukeman-RBcxo9-AU-U-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Nexus Travels</h3> 
      
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://i.ibb.co/71z4GHt/adam-kool-nd-N00-Kmb-J1c-unsplash.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Nexus Travels</h3> 
    
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height: '650px', width: '1000px'}}
      className="d-block w-100"
      src="https://i.ibb.co/QbF4r78/Beautiful-tropical-Maldives-island-with-white-sandy-beach-and-sea.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="mb-5">
      <h3 style={{fontStyle:'italic',fontWeight:'400'}} className="display-3 text-danger">Nexus Travels</h3> 
     
      <button className="btn btn-outline-primary">Read more</button>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </div>
    );
};

export default Banner;


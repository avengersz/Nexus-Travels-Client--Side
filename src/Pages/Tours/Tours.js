import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Tour from './Tour/Tour';

const Tours = () => {
    const [tours, setTours]= useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        fetch('https://ghostly-barrow-94416.herokuapp.com/tours')
        .then(res => res.json())
        .then(data=>setTours(data))
        .finally(()=>setIsLoading(false))
    },[])
    return (
        <div id="tours">
            <h1 className="text-center text-danger my-5">Our Services</h1>
            {
                isLoading ?<Spinner style={{marginLeft: '700px'}} className="text-center" animation="border" variant="danger"></Spinner>
                :
                <Row xs={1} md={3} className="g-2">
                {tours.map(tour => <Tour key={tour._id}tour={tour}></Tour>)}
            </Row>
            }
            
        </div>
    );
};

export default Tours;
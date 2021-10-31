import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';


const MyBooking = () => {
    const [booking, setBooking] = useState([])
    const {user} = useAuth()
    useEffect(()=>{
        fetch('https://ghostly-barrow-94416.herokuapp.com/tour')
        .then(res => res.json())
        .then(data => setBooking(data));
       
    },[user])
    console.log(booking)

     //delete my booking
     const handleDelete = id => {
        const url = `https://ghostly-barrow-94416.herokuapp.com/tour${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you want to delete?');

                    const remainingOrder = booking.filter(singleOrder => singleOrder._id !== id);
                    setBooking(remainingOrder);

                }

            })
    }

    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <br/>
            <br />
            <h1 className="text text-center">My Order</h1>
            <Table striped bordered hover><div>
           
            {
                booking.map(book =><div
                key = {book._id}
                >
        
                    {
                        user.email === book.email ?
                            <div className="container">
                                <div className="row manage-order">
                                    <div className="col">
                                        <h4>{book.name}</h4>
                                    </div>
                                    <div className="col">
                                        <h4>{book.email}</h4>
        
                                    </div>
                                    <div className="col">
                                        <h4>{book.phone}</h4>
        
                                    </div>
                                    <div className="col">
                                        <h4>{book.address}</h4>
        
                                    </div>
                                    <div className="col">
                                        <h4>{book.phone}</h4>
        
                                    </div>
                                    <div className="col">
                                        <h4> {book.tourplace}</h4>
        
                                    </div>
                                    <div className="col">
                                        <h4> {book.date}</h4>
        
                                    </div>
                                    <div className="col">
                                        <h4> {book.cost}</h4>
        
                                    </div>
        
                                </div>
                                <div>
                                    <button  onClick={() => handleDelete(book._id)} className="btn btn-danger">Delete <i class="fas fa-trash-alt"></i></button>
        
                                </div>
                            </div>
                            :
                            <div>
                            </div>
                    }
        
                </div>)
            }
            
        </div>
</Table>
        <Footer></Footer>
        </div>
    );
};

export default MyBooking;
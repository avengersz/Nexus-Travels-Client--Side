import React, { useEffect, useState } from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import './DeleteTour.css';

const DeleteTour = () => {
    const [tourService, setTourService] = useState([]);
    useEffect(() => {
        fetch('https://ghostly-barrow-94416.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTourService(data));
    }, []);
    const handleDelete = id => {
        const url = `https://ghostly-barrow-94416.herokuapp.com/tours/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Are you want to delete?');

                    const remainingTours = tourService.filter(tour => tour._id !== id);
                    setTourService(remainingTours);

                }

            })
    }
    return (
        <div>
            <Navigation/>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 className="delete-title">Delete Tours</h1>
            <div className="manage-tours">
            {
                tourService.map(singleTour => <div key={singleTour._id}>

                    <div className="card add-tour-card">
                        <img src={singleTour.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{singleTour.name}</h5>
                            <button className="btn btn-primary" onClick={() => handleDelete(singleTour._id)}>Delete</button>
                        </div>
                    </div>

                </div>)
            }
            </div>
            
        </div>
    );
};

export default DeleteTour;
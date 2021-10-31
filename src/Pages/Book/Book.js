import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './Book.css'

const Book = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const [tour, setTour] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        const url = `https://ghostly-barrow-94416.herokuapp.com/tours/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data=>setTour(data))
    },[id])
    
    const onSubmit = data => {
        console.log(data)
        fetch('https://ghostly-barrow-94416.herokuapp.com/tour',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('Booking Information Added Successfully')
                reset()
            }
        })
    }



    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row mt-5 ms-5">
                <div className="col-md-6">
                    <div>
                        <img className="image"  src={tour.img} alt="" />
                        <h3>{tour.name}</h3>
                        <h3>${tour.cost}/per person</h3>
                        <p>{tour.description}</p>

                    </div>
                </div>
                <div className="col-md-6">
                <div className="booking">
            <h2 className="text-center text-primary mb-4">Booking Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" defaultValue={user.displayName} />
      <input type="email" {...register("email")} placeholder="Email" defaultValue={user.email} />
      <input type="text" {...register("tourplace")} placeholder="Tour place" defaultValue={tour.name} />
      <input type="text" {...register("address")} placeholder="Address" required />
      <input type="number" {...register("phone")} placeholder="Phone number" required />
      <input type="number" {...register("cost")} defaultValue={tour.cost} />
      <input type="date" {...register("date")} placeholder="date" required />
      <input className="btn btn-primary" type="submit" value="Submit" />

    </form>
        </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Book;
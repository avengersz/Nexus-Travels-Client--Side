import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './AddNewTour.css'

const AddNewTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://ghostly-barrow-94416.herokuapp.com/tours',{
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
                alert('New Tour Added Successfully')
                reset()
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
            <div className="addnew">
            <h2 className="text-center text-primary mb-4">Add A New Tour</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")}placeholder="Place name, Country" />
      <input type="number" {...register("cost")}placeholder="Tour Cost" />
      <textarea type="text" {...register("description")}placeholder="Description" />
      <input type="text" {...register("img")}placeholder="Img Url" />
      <input className="btn btn-primary" type="submit" />
    </form>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AddNewTour;
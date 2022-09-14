import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const RestaurantDetail = () => {

    const { id } = useParams();

    const [ restaurant, setRestaurant] = useState([]);

    const getRestaurant= async() => {
        API.get(`/restaurants/${id}`).then(( res )=> {
            setRestaurant( res.data.data.restaurant)
            console.log(res.data.data.restaurant)
        })
    }

    useEffect( () => {
        getRestaurant();
    }, [])

  return (
    <div className='contenedor'>

        <div className='carta'>  
        <div className='lado   frente'>
        <h2> Nombre: { restaurant.name} </h2>
        <h3> País: { restaurant.country} </h3>
        <p> Ciudad: { restaurant.city } </p>
        <p> Tipo: { restaurant.type} </p> 
        <p> Email: { restaurant.email} </p> 
        <p> Dirección: { restaurant.address} </p> 
        <p> Fecha: { restaurant.date } </p> 
        <p> teléfono: { restaurant.phone} </p>   
        <p> Precio: {restaurant.price}</p>
        <p>Puntuación{restaurant.puntuation}</p>
        <p>Descripción: {restaurant.description}</p>
        <p>Like: {restaurant.likes}</p>    
        </div> 

        <div className='lado atras'> 
        <img src={ restaurant.image } alt={ restaurant.name} />
        </div>
        

        </div>
    </div>
  )
}

export default RestaurantDetail
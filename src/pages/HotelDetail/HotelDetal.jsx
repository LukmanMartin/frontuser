import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./HotelDetail.css"

const HotelDetail = () => {

    const { id } = useParams();

    const [ hotel, setHotel ] = useState([]);

    const getHotel = async() => {
        API.get(`/hoteles/${id}`).then(( res )=> {
            setHotel( res.data.data.hotel)
            console.log(res.data.data.hotel)
        })
    }

    useEffect( () => {
        getHotel();
    }, [])

  return (
    <div className='contenedor'>

        <div className='carta'>  
        <div className='lado   frente'>
        <h2> Name: { hotel.name } </h2>
        <h3> País: { hotel.country} </h3>
        <p> Ciudad: { hotel.city } </p>

        
        <p> Categoria: { hotel.category } </p>

        <p> Email: { hotel.email} </p>
        <p> Fecha: { hotel.date } </p>
        <p> Dirección: { hotel.address } </p>  
        <p> Teléfono: { hotel.phone } </p>
        <p> Precio: {hotel.price}</p>
        <p>Puntuación{hotel.puntuation}</p>
        <p>Descripción: {hotel.description}</p>
        <p>Like: {hotel.likes}</p>    
        </div> 

        <div className='lado atras'> 
        <img src={ hotel.image } alt={ hotel.title } />
        </div>
        

        </div>
    </div>
  )
}

export default HotelDetail
import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./PdiDetail.css"

const PdiDetail = () => {

    const { id } = useParams();

    const [ pdi, setPdi ] = useState([]);

    const getPdi = async() => {
        API.get(`/pdis/${id}`).then(( res )=> {
            setPdi( res.data.data.pdi)
            console.log(res.data.data.pdi)
        })
    }

    useEffect( () => {
        getPdi();
    }, [])

  return (
    <div className='contenedor'>

        <div className='carta'>  
        <div className='lado   frente'>
        <h2>Nombre: { pdi.name } </h2>
        <h3>País: { pdi.country} </h3>
        <p>Ciudad: { pdi.city } </p>       
        <p>Fecha: { pdi.date } </p> 
        <p>Hora: {pdi.times}</p>
        <p>Email: { pdi.email} </p>
        <p>Dirección:{ pdi.address } </p> 
        <p>Teléfono: { pdi.phone } </p>
        <p> Precio: {pdi.price}</p>
        <p>Aceptaciòn de mascota: { pdi.petfriendly } </p>
        <p>Puntuación{pdi.puntuation}</p>
        <p>Descripción: {pdi.description}</p>
        <p>Like: {pdi.likes}</p>    

       </div> 

        <div className='lado atras'> 
        <img src={ pdi.image } alt={ pdi.name} />
        </div>
        

        </div>
    </div>
  )
}

export default PdiDetail
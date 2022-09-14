import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import HotelCard from '../../components/HotelCard/HotelCard';
  
const Hoteles = () => {
    const [allHoteles, setAllHoteles] = useState([]);
   
    
      const getAllHoteles = async () => {
        API.get("/hoteles").then((res) => {
          setAllHoteles(res.data.data.hotel);
    
          console.log(allHoteles)
        });
      };          
       
      useEffect(() => {
        getAllHoteles();
      }, []);
    
    
      return (
        <section>        

            {allHoteles.length ? allHoteles.map((hotel) => <HotelCard hotel={hotel} key={hotel._id}
             />) : <p>Loading Hotel... </p>}                   
          
        </section>

      )

   


   
}

export default Hoteles
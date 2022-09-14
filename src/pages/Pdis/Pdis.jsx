import React from 'react'
import { useEffect, useState } from "react";
import { API } from "../../services/API";
import PdiCard from '../../components/PdiCard/PdiCard';
  
const Pdis = () => {
    const [allPdis, setAllPdis] = useState([]);
   
    
      const getAllPdis = async () => {
        API.get("/pdis").then((res) => {
          setAllPdis(res.data.data.pdi);
    
          console.log(Pdis)
        });
      };          
       
      useEffect(() => {
        getAllPdis();
      }, []);
    
    
      return (
        <section>        

            {allPdis.length ? allPdis.map((pdi) => <PdiCard pdi={pdi} key={pdi._id}
             />) : <p>Loading Pdi... </p>}                   
          
        </section>

      )

   


   
}

export default Pdis
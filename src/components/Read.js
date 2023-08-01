import React, { useState } from "react";
import axios from "axios";

function Read() {
    const [liste, setListe] = useState([]);

    const Liste = () => {
        axios.get('http://localhost:3001/read').then((response) => {
            setListe(response.data);
        });
    }
    
  return (
    <section>
        <div className="ReadPage">
            <button type="text" onClick={Liste}>Voir la liste des annonces</button>
            {liste.map((val, key) => {
                return(
                <div className="SectionRead">
                    <p>{val.Nom}</p>
                    <img src={val.Image} alt="photo"/>
                    <p>{val.Kilomètres}</p>
                    <p>{val.Couleur}</p>
                    <p>{val.Année}</p>
                    <p>{val.Boite}</p>
                    <p>{val.ChevauxFiscaux}</p>
                    <p>{val.Portes}</p>
                </div>
            )})}
        </div>
    </section>
  );
}

export default Read;
import React, { useState } from "react";
import axios from "axios";

function Create() {
    const [Nom, setNom] = useState("");
    const [Image, setImage] = useState("");
    const [Kilomètres, setKilo] = useState(0);
    const [Couleur, setCouleur] = useState("");
    const [Année, setAnnee] = useState(0);
    const [Boite, setBoite] = useState("");
    const [ChevauxFiscaux, setChevauxFiscaux] = useState(0);
    const [Portes, setPorte] = useState("");

    const Enregistrer = () => {
      axios.post('http://localhost:3001/create', {
        Nom: Nom, 
        Image: Image, 
        Kilomètres: Kilomètres, 
        Couleur: Couleur, 
        Année: Année, 
        Boite: Boite, 
        ChevauxFiscaux: ChevauxFiscaux, 
        Portes: Portes
      }).then(() => {
        console.log("success");
      })
    }

  return (
    <section>
        <div className="CreatePage">
            <label>Nom : </label>
            <input type="text" onChange={(event) => {setNom(event.target.value);}}/>
            <label>Image : </label>
            <input type="text" onChange={(event) => {setImage(event.target.value);}}/>
            <label>kilometres : </label>
            <input type="number" onChange={(event) => {setKilo(event.target.value);}}/>
            <label>couleur : </label>
            <input type="text" onChange={(event) => {setCouleur(event.target.value);}}/>
            <label>année : </label>
            <input type="number" onChange={(event) => {setAnnee(event.target.value);}}/>
            <label>boîte : </label>
            <input type="text" onChange={(event) => {setBoite(event.target.value);}} />
            <label>chevaux fiscaux : </label>
            <input type="text" onChange={(event) => {setChevauxFiscaux(event.target.value);}} />
            <label>nombre de portes : </label>
            <input type="number" onChange={(event) => {setPorte(event.target.value);}}/>
            <button type="submit" onClick={Enregistrer}>Enregistrer</button>
        </div>
    </section>
  );
}

export default Create;
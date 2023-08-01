import React, { useState } from "react";
import axios from "axios";

function Update() {
  const [liste, setListe] = useState([]);

  // ONCLICK LIRE LA LISTE DES ANNONCES
  const Liste = () => {
      axios.get('http://localhost:3001/read').then((response) => {
          setListe(response.data);
      });
  }

  // ONCLICK MODIFIER LES ANNONCES
  const Update = (id) => {
      axios.put('http://localhost:3001/update', {
        Nom: newNom,
        Image: newImage,
        Kilomètres: newKilomètres,
        Couleur: newCouleur,
        Année: newAnnée,
        Boite: newBoite,
        ChevauxFiscaux: newChevauxFiscaux,
        Portes: newPortes,
        id: id
      }).then((response) => {
        setListe(
          Liste.map((val) => {
            return val.id == id
            ? {
              id: val.id,
              Nom: val.Nom,
              Image: val.Image,
              Kilomètres: val.Kilomètres,
              Couleur: val.Couleur,
              Année: val.Année,
              Boite: val.Boite,
              ChevauxFiscaux: val.ChevauxFiscaux,
              Portes: val.Portes,
            }
            : val;
          })
        );
      }
    );
  };

  // NOUVEL ETAT POUR MODIFIER LE CONTENU
  const [newNom, setNewNom] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newKilomètres, setNewKilomètres] = useState(0);
  const [newCouleur, setNewCouleur] = useState("");
  const [newAnnée, setNewAnnée] = useState(0);
  const [newBoite, setNewBoite] = useState("");
  const [newChevauxFiscaux, setNewChevauxFiscaux] = useState(0);
  const [newPortes, setNewPortes] = useState(0);

return (
  <section>
      <div className="UpdatePage">
          <button type="text" onClick={Liste}>Voir la liste des annonces</button>
          {liste.map((val, key) => {
              return(
              <div className="SectionUpdate">
                  <p>{val.Nom}</p>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewNom(event.target.value);}}/>
                    <button type="submit" onClick={() => {Update(val.id)}}>Update</button>
                  </div>

                  <img src={val.Image} alt="photo"/>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewImage(event.target.value);}}/>
                    <button type="submit" onClick={() => {Update(val.id)}}>Update</button>
                  </div>

                  <p>{val.Kilomètres}</p>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewKilomètres(event.target.value);}}/>
                    <button type="submit" onClick={() => {Update(val.id)}}>Update</button>
                  </div>

                  <p>{val.Couleur}</p>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewCouleur(event.target.value);}}/>
                    <button type="submit"onClick={() => {Update(val.id)}} >Update</button>
                  </div>

                  <p>{val.Année}</p>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewAnnée(event.target.value);}}/>
                    <button type="submit" onClick={() => {Update(val.id)}}>Update</button>
                  </div>

                  <p>{val.Boite}</p>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewBoite(event.target.value);}}/>
                    <button type="submit" onClick={() => {Update(val.id)}}>Update</button>
                  </div>

                  <p>{val.ChevauxFiscaux}</p>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewChevauxFiscaux(event.target.value);}}/>
                    <button type="submit"onClick={() => {Update(val.id)}} >Update</button>
                  </div>

                  <p>{val.Portes}</p>
                  <div className="Modifier">
                    <input type="text" placeholder="modifier le contenu" onChange={(event) => {setNewPortes(event.target.value);}}/>
                    <button type="submit" onClick={() => {Update(val.id)}}>Update</button>
                  </div>
              </div>
          )})}
      </div>
  </section>
);
}

export default Update;
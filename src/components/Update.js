import React, { useState } from "react";

function Update() {
    const [nom, setNom] = useState("");
    const [image, setImage] = useState("");
    const [kilo, setKilo] = useState(0);
    const [couleur, setCouleur] = useState("");
    const [annee, setAnnee] = useState(0);
    const [boite, setBoite] = useState("");
    const [chevfiscaux, setChevFiscaux] = useState(0);
    const [porte, setPorte] = useState("");
  return (
    <section>
        <div className="UpdatePage">
            <label>Nom : </label>
            <input type="text" />
            <label>Image : </label>
            <input type="text" />
            <label>kilometres : </label>
            <input type="number" />
            <label>couleur : </label>
            <input type="text" />
            <label>année : </label>
            <input type="number" />
            <label>boîte : </label>
            <input type="number" />
            <label>chevaux fiscaux : </label>
            <input type="text" />
            <label>nombre de portes : </label>
            <input type="number" />
            <button type="submit">Modifier</button>
        </div>
    </section>
  );
}

export default Update;
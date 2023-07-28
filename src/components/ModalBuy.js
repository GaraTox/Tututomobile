import React, {useState, useEffect}  from 'react';
import jsonData from '../dataBuy.json';

function ModalBuy({closeModal}){
    const [data, setData] = useState([]);
      
    useEffect(() => {
      // Chargez les données à partir du fichier JSON dans l'état local du composant
      setData(jsonData);
    }, []);

    return(
        <section className='bg_modal'>
            {data.map(item => (
            <div className='content_modal' key={item.id}>
                <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className='title'></div>
                    <h4>{item.NomVoiture}</h4>
                <div className='body'></div>
                <div><img src={item.Image} alt="vehicule a vendre"/></div>
                <p>{item.Kilometre}</p>
                <p>{item.Couleur}</p>
                <p>{item.Carburant}</p>
                <p>{item.Année}</p>
                <p>{item.Vitesse}</p>
                <p>Chevaux Fiscaux : {item.ChevauxFiscaux}</p>
                <p>Nombre de portes : {item.NombrePortes}</p>
            </div>
            ))}
        </section>
    )
}

export default ModalBuy;
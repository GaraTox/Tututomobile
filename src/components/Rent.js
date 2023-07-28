import React, {useState, useEffect} from "react";
import jsonData from '../dataRent.json';
import ModalRent from './ModalRent';

// import vehicule1 from '../assets/pictures/voiture1.jpg'
// import vehicule2 from '../assets/pictures/voiture2.jpg'
// import vehicule3 from '../assets/pictures/voiture3.jpg'
// import vehicule4 from '../assets/pictures/voiture4.jpg'
// import vehicule5 from '../assets/pictures/voiture5.jpg'

function Buy() {
        const [data, setData] = useState([]);
      
        useEffect(() => {
          // Chargez les données à partir du fichier JSON dans l'état local du composant
          setData(jsonData);
        }, []);

        const [openModal, setOpenModal] = useState(false);

  return (
    <section className="RentPage">
        <div className="Louer">

            {data.map(item => (
                <div className="BlocLouer" key={item.id}>
                    <div><h4>{item.NomVoiture}</h4></div>
                    <div><img src={item.Image} alt="vehicule a vendre"/></div>
                    <div><p>{item.Kilometre}</p></div>
                    <div><p>{item.Couleur}</p></div>
                    <div><p>{item.Carburant}</p></div>
                    <div className="button" ><button type="text" key={item.id} onClick={() => {setOpenModal(true);}}>Voir plus</button></div>
                    {openModal && <ModalRent closeModal={setOpenModal}/>}

                </div>
            ))}

        </div>
    </section>
  );
}

export default Buy;
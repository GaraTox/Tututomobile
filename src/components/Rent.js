import React, {useState, useEffect} from "react";
import jsonData from '../dataRent.json';
import ModalRent from './ModalRent';

// import vehicule1 from '../assets/pictures/voiture1.jpg'
// import vehicule2 from '../assets/pictures/voiture2.jpg'
// import vehicule3 from '../assets/pictures/voiture3.jpg'
// import vehicule4 from '../assets/pictures/voiture4.jpg'
// import vehicule5 from '../assets/pictures/voiture5.jpg'

function Buy() {
      // MAP
        const [data, setData] = useState([]);
        useEffect(() => {
          setData(jsonData);
        }, []);

        // MODALE
        const [openModal, setOpenModal] = useState(false);

        // MESSAGE DE RDV
          const generateRandomDate = () => {
          const startDate = new Date(2023, 8, 29); // Date de début, ici le 1er janvier 2000
          const endDate = new Date(); // Date actuelle (date du jour)
          const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()); 
          const generatedDate = new Date(randomTime);
            return generatedDate;
          };
          const handleShowRandomDate = () => {
          const randomDate = generateRandomDate();
          window.alert(`RDV : ${randomDate.toDateString()}`);
          };

  return (
    <section className="RentPage">
        <div className="Louer">
        {openModal && <ModalRent closeModal={setOpenModal}/>}
            {data.map(item => (
                <div className="BlocLouer" key={item.id}>
                    <div><h4>{item.NomVoiture}</h4></div>
                    <div><img src={item.Image} key={item.id} onClick={() => {setOpenModal(true);}} alt="vehicule a vendre"/></div>
                    <div><p>{item.Kilometre}</p></div>
                    <div><p>{item.Couleur}</p></div>
                    <div><p>{item.Carburant}</p></div>
                    <div className="button"><button type="text">{ "Louer" ? "Louer" : "Déjà loué"}</button></div>
                    <div className="button" ><button type="text" key={item.id}  onClick={handleShowRandomDate}>Prendre rendez-vous</button></div>
                </div>
            ))}

        </div>
    </section>
  );
}

export default Buy;
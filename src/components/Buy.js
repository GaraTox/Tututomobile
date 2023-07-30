import React, {useState, useEffect} from "react";
import jsonData from '../dataBuy.json';
import ModalBuy from './ModalBuy';

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
      
      // MESSAGE DE RENDEZ VOUS
      const generateRandomDateTime = () => {
        const year = Math.floor(Math.random() * 1) + 2023;
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1;
        const hour = Math.floor(Math.random() * 24);
        const minute = Math.floor(Math.random() * 60);
    
        const randomDate = new Date(year, month - 1, day, hour, minute);
    
        alert(`RDV : ${randomDate.toString()}`);
      };
      
  return (
    <section className="BuyPage">
        <div className="Acheter">
        {openModal && <ModalBuy closeModal={setOpenModal}/>}
            {data.map(item => (
                <div className="BlocAcheter" key={item.id}>
                    <div><h4>{item.NomVoiture}</h4></div>
                    <div><img src={item.Image} key={item.id} onClick={() => {setOpenModal(true);}} alt="vehicule a vendre"/></div>
                    <div><p>{item.Kilometre}</p></div>
                    <div><p>{item.Couleur}</p></div>
                    <div><p>{item.Carburant}</p></div>
                    <div className="button" ><button type="text" key={item.id} onClick={generateRandomDateTime}>Prendre rendez-vous</button></div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Buy;
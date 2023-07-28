import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import vehicule1 from '../assets/pictures/voiture1.jpg'
import vehicule2 from '../assets/pictures/voiture2.jpg'
import vehicule3 from '../assets/pictures/voiture3.jpg'
import vehicule4 from '../assets/pictures/voiture4.jpg'
import vehicule5 from '../assets/pictures/voiture5.jpg'

function Home() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 781 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 780, min: 568 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 567, min: 0 },
          items: 1
        }
      };
  return (
    <section className="bg-image">
        <div className="HomePage">
            <h1 className="MessageBienvenue">Bienvenue</h1>
            <p className="MessageAccueil">Tututomobile, le concessionnaire proche des clients.</p>
        </div>
        <div>
            <p className="Vehicule-Vendre">Vehicule à vendre</p>
        </div>
        <Carousel responsive={responsive}>
            <div className="Bloc-Vehicule">
                <img className="Vehicule" src={vehicule1} alt="vehicule 1"/>
            </div>
            <div className="Bloc-Vehicule">
                <img className="Vehicule" src={vehicule2} alt="vehicule 2"/>
            </div>
            <div className="Bloc-Vehicule">
                <img className="Vehicule" src={vehicule3} alt="vehicule 3"/>
            </div>
            <div className="Bloc-Vehicule">
                <img className="Vehicule" src={vehicule4} alt="vehicule 4"/>
            </div>
            <div className="Bloc-Vehicule">
                <img className="Vehicule" src={vehicule5} alt="vehicule 5"/>
            </div>
        </Carousel>
    </section>
  );
}

export default Home;
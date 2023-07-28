import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul className="Head-List">
        <Link to="/"><li>Accueil</li></Link>
        <Link to="/buy"><li>Acheter un véhicule</li></Link>
        <Link to="/rent"><li>Louer un véhicule</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </header>
  );
}

export default Header;
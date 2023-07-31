import React from "react";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <section>
        <div className="AdminPage">
            <div className="CRUD">
                <ul>
                    <Link to="/create"><li>Créer</li></Link>
                    <Link to="/update"><li>Modifier</li></Link>
                    <Link to="/delete"><li>Supprimer</li></Link>
                    <Link to="/read"><li>Lire</li></Link>
                </ul>
            </div>
            <h1>Bienvenue sur la page administrateur</h1>
        </div>
    </section>
  );
}

export default Admin;
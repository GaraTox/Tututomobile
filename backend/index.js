const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// CONNEXION A LA BASE DE DONNEES
const db = mysql.createConnection({
	user: 'root',
	host : 'localhost',
	password: '',
	database : 'tututomobile'
});


app.post('/create', (req, res) => {
	const Nom = req.body.Nom;
	const Image = req.body.Image;
	const Kilomètres = req.body.Kilomètres;
	const Couleur = req.body.Couleur;
	const Année = req.body.Année;
	const Boite = req.body.Boite;
	const ChevauxFiscaux = req.body.ChevauxFiscaux;
	const Portes = req.body.Portes;

	db.query('INSERT INTO annonces (Nom, Image, Kilomètres, Couleur, Année, Boite, ChevauxFiscaux, Portes) VALUES (?,?,?,?,?,?,?,?)', 
	[Nom, Image, Kilomètres, Couleur, Année, Boite, ChevauxFiscaux, Portes],
	(err, result) => {
		if (err){
			console.log(err)
		}else{
			res.send('Annonce enregistrée')
		}
	});
})

app.listen(PORT, () => {
	console.log(`Le port de mon backend est le :"${PORT}`);
});
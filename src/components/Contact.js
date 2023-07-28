import React from "react";
import { withFormik } from "formik";
import * as Yup from 'yup';

const Contact = (props) =>(
    <section className="ContactPage">
        <div>
        <form>
            <div className="mb-3">
                <label htmlFor="Nom" className="form-label">Nom</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" name="Nom" onChange={props.handleChange} value={props.values.Nom} autoComplete="off" required/>
                {props.errors.Nom &&<span style={{color:"red"}}>{props.errors.Nom}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="Prenom" className="form-label">Prénom</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" name="Prenom" onChange={props.handleChange} value={props.values.Prenom} autoComplete="off" required/>
                {props.errors.Prenom &&<span style={{color:"red"}}>{props.errors.Prenom}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">Mail</label>
                <input type="email" className="form-control" aria-describedby="emailHelp"  name="Mail" onChange={props.handleChange} value={props.values.Mail} autoComplete="off" required/>
                {props.errors.Mail &&<span style={{color:"red"}}>{props.errors.Mail}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="Tel" className="form-label">Telephone</label>
                <input type="number" className="form-control" name="Tel" onChange={props.handleChange} value={props.values.Tel} autoComplete="off" required/>
                {props.errors.Tel &&<span style={{color:"red"}}>{props.errors.Tel}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="Objet" className="form-label">Objet du message</label>
                <input type="text" className="form-control" aria-describedby="emailHelp" name="Objet" onChange={props.handleChange} value={props.values.Objet} autoComplete="off" required/>
                {props.errors.Objet &&<span style={{color:"red"}}>{props.errors.Objet}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="Message" className="form-label">Message</label>
                <textarea type="text" className="form-control" aria-describedby="emailHelp" name="Message" onChange={props.handleChange} value={props.values.Message} autoComplete="off" required/>
                {props.errors.Message &&<span style={{color:"red"}}>{props.errors.Message}</span>}
            </div>
            <button onClick={props.handleSubmit} type="submit" className="btn btn-primary">Envoyer</button>
        </form>
        </div>

       <footer>
            <ul>
                <li>Route de la caisse</li>
                <li>59500 DOUAI</li>
                <li>TEL : 06 06 06 06 06</li>
                <li>contact@tututomobile.fr</li>
            </ul>
        </footer> 
    </section>
  );

  export default withFormik({
    mapPropsToValues:()=>({
        Nom:"",
        Prenom:"",
        Mail:"",
        Tel:"",
        Objet:"",
        Message:''
    }),
    validationSchema:Yup.object().shape({
        Nom : Yup.string()
        .min(5,'Votre nom doit avoir plus de 2 caractères')
        .required("Le prénom est obligatoire"),
        Prenom : Yup.string()
        .min(5,'Votre nom doit avoir plus de 2 caractères')
        .required("Le nom est obligatoire"),
        Mail : Yup.string()
        .email("Veuillez entrer une adresse mail valide")
        .required("Le mail est obligatoire"),
        Tel : Yup.string()
        .min(5,'Votre nom doit avoir plus de 5 caractères')
        .required("Le numéro de téléphone est obligatoire"),
        Objet : Yup.string()
        .min(5,'Votre nom doit avoir plus de 2 caractères')
        .required("Le sujet du message est obligatoire"),
        Message : Yup.string()
        .min(10,"Le message doit contenir plus de 5 caractères")
        .max(500,"Le message doit faire moins de 500 caractères")
        .required("Le message est obligatoire")
    }),
    handleSubmit:(values)=>{
        alert('Message Envoyé')
    }
}) (Contact);

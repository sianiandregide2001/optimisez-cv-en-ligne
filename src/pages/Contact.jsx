import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>ME CONTACTER</h1>
      <p>
        Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
      </p>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Votre nom</label>
              <input type="text" className="form-control" id="name" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Votre adresse email</label>
              <input type="email" className="form-control" id="email" placeholder="Votre adresse email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Votre numéro de téléphone</label>
              <input type="tel" className="form-control" id="phone" placeholder="Votre numéro de téléphone" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" className="form-control" id="subject" placeholder="Sujet" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Votre message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Votre message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
          <p>06 20 30 40 50</p>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.127168512768!2d4.808052315741873!3d45.77423337910524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1d6b5e1f4af%3A0x421e6428aabc6fd5!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1629395143151!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

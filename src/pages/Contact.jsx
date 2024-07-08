import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-form">
        <h2>ME CONTACTER</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <div><hr /></div>
      </div>
      <div className='container'>
        <div className='form-details'>
          <h3>Formulaire de contact</h3>
        <div><hr /></div>

          <form>
            <input type="text" placeholder="Votre nom" required />
            <input type="email" placeholder="Votre adresse email" required />
            <input type="tel" placeholder="Votre numéro de téléphone" required />
            <input type="text" placeholder="Sujet" required />
            <textarea placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div className="contact-details">
          <h3>Mes coordonnées</h3>
        <div><hr /></div>

          <p>📍 40 Rue Laure Diebold, 69009 Lyon, France</p>
          <p>📞 06 20 30 40 50</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.2657194767735!2d4.8038461157134925!3d45.76810347910571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1d6ed9b3f0d%3A0x551b0c5c4c1b9b74!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1639379462340!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

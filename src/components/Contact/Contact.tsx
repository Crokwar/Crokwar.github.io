import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'YOUR_SERVICE_ID',    // Reemplaza con tu Service ID
      'YOUR_TEMPLATE_ID',   // Reemplaza con tu Template ID
      templateParams,
      'YOUR_USER_ID'        // Reemplaza con tu User ID
    ).then(() => {
      setSent(true);
      setFormData({ name: '', email: '', message: '' });
    }).catch((err) => {
      setError('Error al enviar el mensaje. Por favor intenta de nuevo.');
      console.error('Error:', err);
    });
  };

  return (
    <div className="contact-container">
      <h2>Contáctame</h2>
      {sent && <p className="success-message">Mensaje enviado con éxito!</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

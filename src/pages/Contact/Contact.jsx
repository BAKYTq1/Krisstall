import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <div className="contact-page">
      <h1>Наши контакты</h1>
      
      <div className="contact-content">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33361.90686202347!2d74.58062223255128!3d42.88625004764632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7e74697b7a5%3A0xb625d929c04e872e!2z0J_QsNC90YTQuNC70L7QsiDQv9Cw0YDQutGL!5e0!3m2!1sru!2skg!4v1742889991559!5m2!1sru!2skg" 
            width="100%" 
            height="450" 
            style={{border: 0}}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        
        <div className="contact-info">
          <h2>Контактная информация</h2>
          <div className="info-item">
            <span className="icon">📍</span>
            <span>г. Бишкек, ул. Раззакова, 123</span>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <div>
            <p>+996 (703) 829-576</p>
            <p>+996 (555) 055-300</p>
            </div>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <span>sharshenbekov777@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="icon">🕒</span>
            <span>Ежедневно с 9:00 до 21:00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
import React, { useState, useRef } from "react"; // Добавлен импорт хуков
import "./WholesaleSales.scss";
import flower from "./svg/flowerHead.svg";
import flowerBody from "./svg/flowerBody.svg";
import som from "./svg/сомакатimg.svg";
import magnit from "./svg/магнит.svg";
import karavan from "./svg/karavan.svg";
import dis from "./svg/discrip.svg";
import circle from "./svg/circle.svg";

function WholesaleSales() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setShowModal(true);
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(() => setShowModal(false), 3000);
    }
  };

  return (
    <div className="WrapperWholesaleSales">
      {/* Блок 1 - Основная информация */}
      <section className="WholesaleSalesBlock1Container">
        <div className="WholesaleSalesBlock1Contant">
          <div className="WholesaleSalesBlock1Text">
            <h1>Оптовые продажи</h1>
            <p>Вы всегда можете приобрести нашу продукцию в следующих магазинах:</p>
            <button 
              className="btn-primary" 
              onClick={scrollToForm}
            >
              Связаться с менеджером
            </button>
          </div>

          <div className="advertisingGrid">
            <div className="grid-item">
              <div className="custom-btn">
                <div className="flower-container">
                  <img src={flower} alt="flower" className="flower-icon" />
                  <img src={flowerBody} alt="flowerBody" className="flower-icon" />
                </div>
                ЛЕНТА
              </div>
            </div>
            <div className="grid-item">
              <img src={som} alt="som" className="brand-logo" />
            </div>
            <div className="grid-item">
              <img src={magnit} alt="magnit" className="brand-logo" />
            </div>
            <div className="grid-item">
              <img src={dis} alt="discrip" className="brand-logo" />
            </div>
            <div className="grid-item">
              <img src={karavan} alt="karavan" className="brand-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Успешно отправлено!</h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
            <button 
              onClick={() => setShowModal(false)}
              className="modal-close-btn"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Блок 2 - Условия продаж */}
      <section className="WholesaleSalesBlock2Container">
        <div className="WholesaleSalesBlock2Contant">
          <h2>Условия оптовых продаж</h2>
          <p>
            {/* Ваш текст */}
          </p>
        </div>
      </section>

      {/* Блок 3 - Форма связи */}
      <section className="WholesaleSalesBlock3Container" ref={formRef}>
        <div className="WholesaleSalesBlock3Contant">
          <img src={circle} alt="circle" className="circle-decoration" />
          <h2>Форма связи с менеджером</h2>
          <form onSubmit={handleSubmit} className="inputContainer">
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Ваше имя"
              type="text"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              type="email"
              required
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Телефон"
              type="tel"
              required
            />
            <button type="submit" className="btn-secondary">
              Отправить
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default WholesaleSales;
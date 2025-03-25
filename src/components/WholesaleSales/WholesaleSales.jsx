import React, { useState, useRef } from 'react';
import "./WholesaleSales.scss";
import flower from "./svg/flowerHead.svg";
import flowerBody from "./svg/flowerBody.svg";
import som from "./svg/сомакат.svg";
import magnit from "./svg/магнит.svg";
import karavan from "./svg/karavan.svg";
import dis from "./svg/discrip.svg";
import circle from "./svg/circle.svg";
import Input from '../inpur/Input';
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
          </div> {/* Закрываем div advertisingGrid */}
        </div> {/* Закрываем div WholesaleSalesBlock1Contant */}
      </section>

      <section ref={formRef}>
        <Input />
      </section>
    </div>
  );
}

export default WholesaleSales;

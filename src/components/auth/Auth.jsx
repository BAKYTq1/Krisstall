import React, { useState } from "react";
import "./Auth.scss";
import { FaVk, FaPhone } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { auth } from "../../fireBase"; // Убедитесь, что ваш Firebase настроен правильно
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  RecaptchaVerifier, 
  signInWithPhoneNumber 
} from "firebase/auth";

function Auth() {

  const [authMethod, setAuthMethod] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Успешный вход через Google", user);
      alert("Успешный вход через Google");
    } catch (error) {
      console.error("Ошибка входа через Google:", error.message);
      alert("Ошибка входа через Google: " + error.message);
    }
  };

    const [authMethod,setAuthMethod]= useState(null)
  return (
    <div className='auth-container'>
        {authMethod=="email"?(
            <div className="auth-box">
                <h2 className='auth-title'>Авторизация</h2>
                <input style={{paddingLeft:'15px', marginTop:'13px'}} type="email" placeholder="Ваша почта" className='auth-input' />
                <input style={{paddingLeft:'15px', marginTop:'17px'}} type="password" placeholder="Пароль" className='auth-input' />
                <button className='auth-button'>Продолжить</button>
                <p className='con-par'>Нажимая на кнопки “Продолжить”, вы соглашаетесь с политикой конфиденциальности</p>
                <p>--------------------------------ИЛИ------------------------------</p>
                <button className='social-button vk'><FaVk /> Продолжить с  VK </button>
                <button className='social-button google'><FcGoogle /> Продолжить с  Google 
                </button>
                <button className='auth-method-button' onClick={()=> setAuthMethod("phone")}>   <FaPhone />     По номеру телефона</button>
                <p className='auth-back' onClick={()=> setAuthMethod(null)}>Назад</p>
            </div>
            

        ):authMethod=="phone"?(
            <div className="auth-box">
                <h2 className='auth-title'>Авторизация</h2>
                <input style={{paddingLeft:'15px'}} type="tel" placeholder="Номер телефона" className="auth-input"/>
                <button className='auth-button auth-code-button'>Отправить код</button>
                <p>--------------------------------ИЛИ------------------------------</p>
                <button className='social-button vk'><FaVk /> Продолжить с  VK </button>
                <button className='social-button google'><FcGoogle /> Продолжить с  Google 
                </button>


  const signInWithEmail = async () => {
    if (!email || !password) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Успешный вход");
    } catch (error) {
      console.error("Ошибка входа:", error);
      alert("Ошибка входа: " + error.message);
    }
  };

  const sendOtp = async () => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
      const confirmation = await signInWithPhoneNumber(auth, phone, recaptcha);
      setConfirmationResult(confirmation);
      alert("Код отправлен");
    } catch (error) {
      console.error("Ошибка отправки кода:", error);
      alert("Ошибка отправки кода: " + error.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      alert("Успешный вход по телефону");
    } catch (error) {
      console.error("Ошибка подтверждения кода:", error);
      alert("Ошибка подтверждения кода: " + error.message);
    }
  };

  return (
    <div className="auth-container">
      {authMethod === "email" ? (
        <div className="auth-box">
          <h2 className="auth-title">Авторизация</h2>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="auth-button" onClick={signInWithEmail}>Продолжить</button>
          <p className="auth-back" onClick={() => setAuthMethod(null)}>Назад</p>
        </div>
      ) : authMethod === "phone" ? (
        <div className="auth-box">
          <h2 className="auth-title">Авторизация</h2>
          <input
            type="tel"
            placeholder="Номер телефона"
            className="auth-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="auth-button auth-code-button" onClick={sendOtp}>Отправить код</button>
          <div id="recaptcha-container"></div>
          {confirmationResult && (
            <>
              <input
                type="text"
                placeholder="Введите код"
                className="auth-input"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button className="auth-button" onClick={verifyOtp}>Подтвердить</button>
            </>
          )}
          <p className="auth-back" onClick={() => setAuthMethod(null)}>Назад</p>
        </div>
      ) : (
        <div className="auth-box">
          <h2 className="auth-title">Авторизация</h2>
          <button className="social-button vk">
            <FaVk /> Продолжить с VK
          </button>
          <button className="social-button google" onClick={signInWithGoogle}>
            <FcGoogle /> Продолжить с Google
          </button>
          <p>--------------------------------ИЛИ------------------------------</p>
          <button className="auth-method-button" onClick={() => setAuthMethod("email")}>
            <MdEmail /> Продолжить с почтой
          </button>
          <button className="auth-method-button" onClick={() => setAuthMethod("phone")}>
            <FaPhone /> По номеру телефона
          </button>
        </div>
      )}
    </div>
  );
}

export default Auth;

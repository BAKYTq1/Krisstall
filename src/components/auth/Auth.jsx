import React ,{useState} from 'react'
import "./Auth.scss"
import { FaVk } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";


function Auth() {
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

                <button className="auth-method-button" onClick={() => setAuthMethod("email")}>
                <MdEmail /> Продолжить с почтой
          </button>
                
                <p className="auth-back" onClick={() => setAuthMethod(null)}>Назад</p>
            </div>

        ): (
            <div className="auth-box">
                <h2 className='auth-title'>Авторизация</h2>
                <p>Кварк, как следует из совокупности экспериментальных наблюдений, квантуем. Многочисленные расчеты предсказывают</p>
                <button className='social-button vk'> <FaVk /> Продолжить с  VK </button>
                <button className='social-button google'> <FcGoogle /> Продолжить с  Google 
                </button>
                <p>--------------------------------ИЛИ------------------------------</p>
                <button className="auth-method-button" onClick={() => setAuthMethod("email")}>
                <MdEmail /> Продолжить с почтой 
          </button>
                <button className='auth-method-button' onClick={()=> setAuthMethod("phone")}> <FaPhone />       По номеру телефона</button>
                <p className='con-par'>Нажимая на кнопки “Продолжить”, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
        )
        }
      
    </div>
  )
}

export default Auth

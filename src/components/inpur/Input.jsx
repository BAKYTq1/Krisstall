import  'react'
import './style.scss'
import circle from "./img/circle.svg"
function Input() {
  return (
       <section>
                  <div className='WholesaleSalesBlock3Container'>
                      <div className='WholesaleSalesBlock3Contant'>
                          <img src={circle} alt="" />
                          <h2>Форма связи с менеджером</h2>
                          <div className='inputContainer'>
                              <input placeholder='Ваше имя' type="text" />
                              <input placeholder='Email' type="email" />
                              <input placeholder='Email' type="email" />
                              <button>Отправить</button>
                          </div>
                      </div>
                  </div>
              </section>
  )
}

export default Input

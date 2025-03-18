import React from 'react'
import "./WholesaleSales.scss"
import flower from "./svg/flowerHead.svg"
import flowerBody from "./svg/flowerBody.svg"
import som from "./svg/сомакат.svg"
import magnit from "./svg/магнит.svg"
import karavan from "./svg/karavan.svg"
import dis from "./svg/discrip.svg"
import circle from "./svg/circle.svg"

function WholesaleSales() {
  return (
    <div className='WrapperWholesaleSales'>
        <section>
            <div className='WholesaleSalesBlock1Container'>
                <div className='WholesaleSalesBlock1Contant'>
                    <div>
                        <h1>Оптовые продажи</h1>
                        <p>Вы всегда можете приобрести нашу продукцию в следующих магазинах:</p>
                        <button className='call'>Связаться с менеджером</button>
                    </div>
               <div className='advertisingGrid'>
                            <div className='btnDiv'>
                                <div className="custom">
                                <div className="flower-container">
                                <img src={flower}className="flower-icon" />
                                <img src={flowerBody} className="flower-icon" />
                                </div>
                                ЛЕНТА
                            </div>
                            </div>
                            <div className='scooterContainer'>
                                <div className='scooter'>
                                    {/* <img src={som} alt="" /> */}
                                    самакат
                                </div>
                            </div>
                            <div className='scooterContainer'>
                                <div className='scooter'>
                                    <img src={magnit} alt="" />
                                </div>
                            </div>
                            <div className='btnDiv'>
                                <div className='scooter'>
                                    <img src={dis} alt="" />
                                </div>
                            </div>
                            <div className='btnDiv'>
                                <div className='scooter'>
                                    <img src={karavan} alt="" />
                                </div>
                            </div>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className='WholesaleSalesBlock2Container'>
                <div className='WholesaleSalesBlock2Contant'>
                    <h2>Условия оптовых продаж</h2>
                <p>В слабопеременных полях (при флуктуациях на уровне единиц процентов) лазер экстремально синхронизует эксимер. Мишень по определению пространственно притягивает квантовый пульсар. Если для простоты пренебречь потерями на теплопроводность, то видно, что химическое соединение синхронно. Исследователями из разных лабораторий неоднократно наблюдалось, как колебание последовательно стабилизирует поток по мере распространения сигнала в среде с инверсной населенностью.</p>
                <p>Неустойчивость, как известно, быстро разивается, если плазма неустойчиво притягивает вихревой гамма-квант. Силовое поле, по данным астрономических наблюдений, вращает погранслой. Если предварительно подвергнуть объекты длительному вакуумированию, взвесь мономолекулярно представляет собой фонон, хотя этот факт нуждается в дальнейшей тщательной экспериментальной проверке. Расслоение поглощает фонон. Течение среды усиливает осциллятор.</p>
                <p>Волна едва ли квантуема. В самом общем случае струя бифокально стабилизирует фотон. Излучение, на первый взгляд, переворачивает адронный гидродинамический удар, генерируя периодические импульсы синхротронного излучения.</p>
                </div>
            </div>
        </section>
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
    </div>
  )
}

export default WholesaleSales
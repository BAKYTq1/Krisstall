import React from 'react'
import Block1 from '../../components/block-1/Block1'
// import Desktop from '../../components/other/Desktop'
// import Auth from '../../components/auth/Auth'
import Block2 from '../../components/Block-2/Block2'
import './Style.scss'
import Cardd from '../../components/Cardd/Cardd'


function Home() {
  return (
    <div>
    <Cardd/>
    <Block1/>
    <Block2 /> 
    </div>
  )
}

export default Home

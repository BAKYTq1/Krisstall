import React from 'react'
import Block1 from '../../components/block-1/Block1'
import Desktop from '../../components/other/Desktop'

import Auth from '../../components/auth/Auth'
=======
import Block2 from '../../components/Block-2/Block2'
import './Style.scss'


function Home() {
  return (
    <div>
    <Block1/>

    <Desktop/>
    <Auth/>
      home

    <div className='two-blocks'>
    <Block2 /> 
    </div>

    </div>
  )
}

export default Home

import  'react'
import Block1 from '../../components/block-1/Block1'
import Desktop from '../../components/other/Desktop'
import Block2 from '../../components/Block-2/Block2'
import './Style.scss'
function Home() {
  return (
    <div>
    <Block1/>
    {/* <Desktop/> */}
    <div className='two-blocks'>
    <Block2 /> 
    </div>
    </div>
  )
}

export default Home

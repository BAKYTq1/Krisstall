
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { myRouter } from './router'
import Macarons from './components/Macarons/Macarons'


function App() {

  return (
    <div className='wrapper'>
    <RouterProvider router={myRouter}/>
    <Macarons></Macarons>
    </div>
  )
}

export default App

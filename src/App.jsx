import React from 'react'
import Home from './Components/Home'
import DataForm from './Forms/DataForm'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  // let navigate = useNavigate();
  
  return <>

    <BrowserRouter>
      <Routes>
        <Route path='/portFolio' element={<Home/>}/>
        <Route path='/dataForm' element={<DataForm/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </BrowserRouter>

  </>
}

export default App

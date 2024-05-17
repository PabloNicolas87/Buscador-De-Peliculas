import './App.css'
import MainPage from './components/MainPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SingleMovie from './components/SingleMovie'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={ <MainPage></MainPage> }/>
          <Route  path="/movies/:id" element={ <SingleMovie></SingleMovie> }/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

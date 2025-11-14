import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NavBar from "./generalComponent/NavBar"
import { Routes, Route } from "react-router";
import HomePage from './Home/homePage';
import AboutPage from './About/AboutPage';



function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>

       <Routes>
        <Route index element={<HomePage/>} />
        <Route path='about-us' element={<AboutPage/>} />

      </Routes>
    </>
  )
}

export default App

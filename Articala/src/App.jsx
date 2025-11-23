import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import NavBar from "./generalComponent/NavBar"
import { Routes, Route } from "react-router";
import HomePage from './Home/homePage';
import AboutPage from './About/AboutPage';
import './generalMedia.css'
import Footer from './generalComponent/Footer';
import LoginPage from './Login/LoginPage';
import CreateAnAccountePage from './Login/CreateAnAccountePage';
import { LoginProvider } from './context/loginContext';
import Page404 from './page404';
import ContactUsPage from './contact/ContactUsPage';
import JobsPage from './jobs/JobsPage';


function App() {

  return (
    <>
      <LoginProvider>

        <Routes>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<AboutPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='create-an-accounte' element={<CreateAnAccountePage />} />
          <Route path='contact' element={<ContactUsPage />} />
          <Route path='jobs' element={<JobsPage />} />

          <Route path='*' element={<Page404 />} />

        </Routes>
      </LoginProvider>

    </>
  )
}

export default App

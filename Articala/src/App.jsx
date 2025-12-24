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
import ProfilePage from './profile/ProfilePage';
import FAQPage from './FAQ/FAQPage';
import ExplorePage from './allArticales/ExplorePage';
import Articale from './allArticales/articalePerPage/Articale';
import CreateArticale from './addArticale/CreateArticale';
import MyArticalesPage from './myArticales/MyArticales';
import MyArticalesEdit from './myArticales/MyArticalesedit';
import AdminPage from './admin/AdminPage';
// import AdminLogin from './admin/AdminLogIn';



function App() {

  return (
    <>
      <LoginProvider>

        <Routes>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<AboutPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='create-an-account' element={<CreateAnAccountePage />} />
          <Route path='contact' element={<ContactUsPage />} />
          <Route path='jobs' element={<JobsPage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='faq' element={<FAQPage />} />
          <Route path='explore' element={<ExplorePage />} />
          <Route path='create-new-articale' element={<CreateArticale />} />
          <Route path='my-articales' element={<MyArticalesPage />} />
         
         
          <Route path='admin' element={<AdminPage />} />
          {/* <Route path='admin-login' element={<AdminLogin />} /> */}

         
          <Route path='explore/:id' element={<Articale />} />
          <Route path='my-articales/:id' element={<MyArticalesEdit />} />

          <Route path='*' element={<Page404 />} />

        </Routes>
      </LoginProvider>

    </>
  )
}

export default App

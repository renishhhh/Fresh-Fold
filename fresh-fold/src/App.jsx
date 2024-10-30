import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'

const MainLayout = () => (
  <>
    <Navbar /> 
    <Carousel />
    <div id="contact-section">
      <Contact />
    </div>
    <Footer />
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    },
    {
      path: "/login",
      element: <><Navbar /><Login /><Footer/></>,
      errorElement: <ErrorPage />,  
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /><Footer/></>,
      errorElement: <ErrorPage />,  
    },
    {
      path: "/about",
      element: <><Navbar /><About/><Contact /><Footer/></>,
      errorElement: <ErrorPage />,  
    },
    {
      path: "/services",
      element: <><Navbar /><Services/><Contact /><Footer/></>,
      errorElement: <ErrorPage />,  
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

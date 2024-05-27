import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import BlogDetails from './Pages/BlogDetails';
import ProjectsDetails from './Pages/ProjectsDetails';
import ServicesDetails from './Pages/ServicesDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/ServicesDetails' element={<ServicesDetails />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/ProjectsDetails' element={<ProjectsDetails />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/BlogDetails' element={<BlogDetails />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />

          <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

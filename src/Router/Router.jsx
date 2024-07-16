
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "../App";
import Home from '../Components/Home';
import Skills from '../Components/skills';
import Project from '../Components/Project';
import Contact from '../Components/contact';

function Action() {
  return (
    <Router> 
        <Routes>
         <Route path='/' element={<App/>}></Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default Action;

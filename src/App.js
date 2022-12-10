import './App.css';
import Experience from './Components/Experience/Experience';
import Introduction from './Components/Introduction/Introduction';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { themeContext } from './Context';
import { useContext } from 'react';
import Contact from './Components/Contact/Contact';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
  >
    <Navbar></Navbar>
    <Introduction></Introduction>
    <Services></Services>
    <Experience></Experience>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
  </div>
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Navigation from './Component/Nav/Navigation';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Education from './Component/Education/Education';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Navigation className="NavigantionFixed"></Navigation>
      <About></About>
      {/* <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer> */}
    </div>
  );
}

export default App;

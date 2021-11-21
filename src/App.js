import './App.css';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Contactus from './components/pages/Contactus';
import Footer from './components/pages/Footer';
import Navbar from './components/pages/Navbar';
import Download from './components/pages/Download';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Download/>
      <Features/>
      <Contactus/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;

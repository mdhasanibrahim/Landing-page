import './App.css';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Contactus from './components/pages/Contactus';
import Footer from './components/pages/Footer';
import Navbar from './components/pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Features/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;

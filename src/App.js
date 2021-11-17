import './App.css';
import Home from './components/pages/Home';
import Features from './components/pages/Features';
import Contactus from './components/pages/Contactus';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Features/>
      <Contactus/>
      <Footer/>
    </div>
  );
}

export default App;

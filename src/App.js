import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Header from './Components/Header';
import Money from './Components/Money';
import Biling from './Components/Biling';
import Better from './Components/Better';
import Card from './Components/Opinion';
import Opinion from './Components/Opinion';
import Service from './Components/Service';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Money/>
     <Biling/>
     <Better/>
     <Opinion/>
     <Service/>
     <Footer/>
    </div>
  );
}

export default App;

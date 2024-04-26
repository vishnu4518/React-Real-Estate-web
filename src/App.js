import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

import './App.css'
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Values from './components/Values/Values';
import Contacts from './components/Contacts/Contacts';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Companies/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
      <Header/>
     <Hero/>
      </div>
       <Companies/>
       <Residencies/>
       <Values/>
       <Contacts/>
       <GetStarted/>
       <Footer/>
    </div>
    
  );
};

export default App;

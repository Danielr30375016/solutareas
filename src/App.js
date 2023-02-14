
import './App.css';
import AboutUs from './components/AboutUs';
import Introduction from './components/Introduction';
import NavBar from './components/Navbar';
import OurService from './components/OurService';
import Testimony from './components/Testimony';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Introduction />
      <OurService />
      <Testimony />
      <AboutUs />
      </div>
  );
}

export default App;

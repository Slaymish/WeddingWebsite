import './App.css';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import RSVP from './components/RSVP';
import StorySection from './components/StorySection';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <StorySection />
      <RSVP />
      <Footer />    
    </div>
  );
} 

export default App;

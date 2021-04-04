import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import About from './components/Screens/About';
import Console from './components/Screens/console';
import Experties from './components/Screens/experties';
import Contact from './components/Screens/Contact';
function App() {
  return (
    <Router>
      <div>
        <Container className='Container'>
          <Console />
        </Container>
        <div className='Container'>
          <About />
        </div>
        <div className='Container'>
          <Experties />
        </div>
        <div className='Container'>
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;

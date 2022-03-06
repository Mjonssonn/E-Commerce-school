import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';
import NavBar from './components/Navigation/NavBar';
import Footer from 'react-footer-comp';

function App() {
  return (
    <div className='App'>
      <NavBar />
    </div>
  );
}

export default App;

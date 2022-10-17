import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Cafe from './pages/Cafe/Cafe';
import Brecho from './pages/Brecho/Brecho';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/brecho' element={<Brecho />} />
        <Route path='/cafe' element={<Cafe />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

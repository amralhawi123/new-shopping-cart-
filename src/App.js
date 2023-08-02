import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Store from './components/Store';
import Navbar from './components/Navbar';
import ShopingCreateProvider from './context/shopingContext';

function App() {
  return (
    <ShopingCreateProvider>
      <Navbar/>
      <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<Store/>}/>
          </Routes>
      </Container>
    </ShopingCreateProvider>
  );
}

export default App;

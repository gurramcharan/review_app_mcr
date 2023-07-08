import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { HotelDetail } from './pages/HotelDetail';

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/review/:hotelId' element={<HotelDetail />} />
      </Routes>
    </div>
  );
}

export default App;

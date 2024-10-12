

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import AddBooks from './pages/AddBooks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/books' element={<Books />}></Route>
        <Route exact path='/addbooks' element={<AddBooks />}></Route>
      </Routes>
      
         
    </div>
  );
}

export default App;

import Login from './Login.jsx'
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
} 

export default App

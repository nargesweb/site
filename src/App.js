
import './App.css';
import Home from './page/Home';
import { Route,Routes } from "react-router-dom"
import Signin from './page/Signin';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
    </Routes>
  );
}

export default App;

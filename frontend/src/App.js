
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import Home from './Component/Home';
import Course from './Component/Course';
import Login from "./Component/Login"
import Signup from './Component/Signup';
import {useAuth} from "./Component/Context/AuthProvider.js";
import { Navigate } from 'react-router-dom';

function App() {
const [authUser,setAuthUser]=useAuth()
console.log(authUser)
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={authUser?<Course/>:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

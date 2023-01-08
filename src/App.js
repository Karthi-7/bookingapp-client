
import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes,Route,Link, useParams} from "react-router-dom"
import Home from './pages/Home';
import Bookingpage from './pages/bookingpage/Bookingpage';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import AdminPage from './pages/admin/AdminPage';
import Landingpage from './pages/landing/Landingpage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/book/:roomId/:checkin/:checkout" element={<Bookingpage />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/profile' element={<Profile /> } />
        <Route path='/admin' element={<AdminPage />} />
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </div>
  );
}

export default App;

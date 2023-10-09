import { useContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { person } from "./assets/1.jpg"
import Error from './Pages/Error/Error'
import Homepage from './Pages/Homepage/Homepage'
import Login from './Pages/login/SignIn'
import Signup from './Pages/signup/SignUp'
import CreateEvent from './Pages/CreateEventPage/CreateEvent';
import Event from './Pages/Eventprofile/EventPage'
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context)
  return (
    <>
    <Router>
      <Routes>

      <Route path='/'element={<Homepage />} />
      
      <Route path='/signup' element={<Signup />} />
      
      if ( user == "null" ){
      <Route path='/login' element={<Login />} />
      }else(
      <Route path='/newevent' element={<CreateEvent />} />
      )
      
      <Route path='/event/:id' element={<Event />} />

      <Route path='/404' element={<Error />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;

import './App.css';
import { Routes, Route, BrowserRouter as Router }from 'react-router-dom';
// Pages
import Home from './Pages/Home';
import ToDo from './Pages/ToDo';
import Mood from './Pages/MoodTracker';
// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App(){
  return (
    <div className="container">
      <Router>
        <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<ToDo/>}/>
        <Route path='/mood' element={<Mood/>}/>
      </Routes>
      
      <Footer/>

      </Router>
    </div>
  );
}

export default App;

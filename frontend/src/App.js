import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewData from './components/ViewData';
import AddData from './components/AddData';
import Footer from './components/Footer';
import ViewItalian from './components/ViewItalian';
import AddItalian from './components/AddItalian';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ind' element={<ViewData/>}/>
      <Route path='/italian' element={<ViewItalian/>}/>
      <Route path='/add' element={<AddData data={{Image:"",Title:"",Duration:"",Number:""}} method ="post"/>}/>
     <Route path='/addita' element={<AddItalian data={{Image:"",Title:"",Duration:"",Number:""}} method ="post"/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

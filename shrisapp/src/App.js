import React from "react";
import './App.css';
										 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Messages from './pages/Messages';
import Admin from './pages/Admin';
import {album} from "./components/albums/album.js";


const getData = () => {
  var data = [{
    src: 'https://res.cloudinary.com/dxyuqoh9w/image/upload/v1662448008/shrisSnaps/rjivs2is2azd9sqa4ks4.jpg',
    height:500,
    author:'' 
  },{
    src: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
    height:800,
    author:'' 
  },{
    src: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
    height:500 ,
    author:'' 
  },{
    src: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
    height:400 ,
    author:'' 
  },{
    src: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
    height:700,
    author:'' 
  },{
    src: 'https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg',
    height:250 ,
    author:'' 
  },]
return data;
}


function App() {
  let images = getData();
  return (
    
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home imgarr={images} / > } />
          <Route path='/about' element={<About/>} />
          <Route path='/messages' element={<Messages/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </Router>  

    </>

  );
}

export default App;

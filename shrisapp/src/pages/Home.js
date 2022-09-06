import React from 'react'
import './Home.css';
// import {album} from "../components/albums/album.js";
import Colomn from './Colomn';

function Home({ imgarr }) {
  let images =[ [], [], [], []]

  let sum = 0;
  imgarr.forEach(img => { sum += Number(img.height);});
  console.log(sum)

  let threshold = sum/4;
  let current = 0;
  let l =0;

  console.log(imgarr)

  imgarr.forEach(img => { 
    current += Number(img.height);
    if(current >= threshold){
      l+=1;
      current = 0;
      images[l].push(img);
    }
    else{
      current += img.height;
      images[l].push(img);
    }
  });

  return(
    <div className='Home'>
      
       {imgarr.map((images,i) => {  return <Colomn key={i} image= {images} />})
       }

    </div>
  )

}

export default Home

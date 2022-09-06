import React from 'react'
import Imgframe from './Imgframe'


function Colomn({image,i}) {
  console.log(image)
  return(
    <div>
      {/* {image.map( (img,i) => { return <Imgframe key={i} src={img.src} h={img.height} />  } )} */}
      {  <Imgframe key={i} src={image.src} h={image.height} />  }
    </div>
  )

      }

export default Colomn

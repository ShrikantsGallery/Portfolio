import React from 'react'



function Imgframe({src,h}) {
  console.log(src)
  return(
    <div>
        <center> <img src={src} height={h} padding="6"/> </center>
    </div>
  )

}

export default Imgframe
import React from 'react'
import '../App.css';

const GalleryBody = (data) => {
    console.log(data)
  return (
    <div>
        <div>
        {
          data?.data.map(image=>{
            return(
              <div key={image.id} className="column">
                <img src={image.img} alt=""></img>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default GalleryBody
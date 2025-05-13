import React, { useState } from 'react'
import DownArrow from "../Images/Down Arrow.svg"
import Beach from "../Images/Beach.jpg"
import Drone from "../Images/Drone.jpg"
import Graduation from "../Images/Graduation.jpg"




export default function ({ images, isProject }) {

    const [imageIndex, setImageIndex] = useState(0)

    const increaseCounter = () => {
        let temp = imageIndex+1
        if(temp == images.length) {
            setImageIndex(0)
        } else {
            setImageIndex(temp);
        }
    }
    const decreaseCounter = () => {
        let temp = imageIndex-1
        if(temp == -1) {
            setImageIndex(images.length-1);
        } else {
            setImageIndex(temp);
        }
    }

  return (
    <>
        <div className="slideshow-images">
            {
                images.map((image, i) => {
                    if (i==imageIndex){
                        return (
                            <img className={isProject ? "slideshow-image-project" : "slideshow-image"} src={image} alt="Project-image" />
                        )
                    }
                })
            }
        </div> 
        <div className="slideshow-arrows">
            <div className='left-button'>
                <img  onClick={() => {decreaseCounter()}} className='left-button' src={DownArrow} alt="left-arrow" height="20px" width="auto" />
            </div>
            <div className='right-button'>
                <img  onClick={() => {increaseCounter()}} className='right-button' src={DownArrow} alt="right-arrow" height="20px" width="auto" />
            </div>
        </div>
    </>
  )
}

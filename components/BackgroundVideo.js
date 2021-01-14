import React from 'react'
import videoSource from "../images/synth-city-free-vj-loop.mp4"
const BackgroundVideo = () => {
    return (
        <div className="video__content">
            <video autoPlay="autoplay" loop="loop" muted className="video">
                <source src={videoSource} type="video/mp4"></source>
                    Your browser does not support the video tag
                </video>
        </div>
    )
}

export default BackgroundVideo

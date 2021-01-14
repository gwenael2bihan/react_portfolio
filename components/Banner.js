import React from 'react'
import { FaLinkedin, FaGithub, FaPlay } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import BackgroundVideo from './BackgroundVideo';

const Banner = () => {
    const [state] = React.useState({title: 'I am Gwenael Bihan', text: ''})
    return (
        <header className="header">
            <div className="container">
              <BackgroundVideo />
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li> <FaLinkedin /></li>
                                    <li><FaGithub /></li>
                                    <li><FiMail /></li>
                                </ul>
                                <h1>Gwenael Bihan</h1>
                                <p>
                                    I am Gwenael Bihan, junior developper Epitech former
                                </p>
                                <div className="header__buttons">
                                    <a href="" className="btn btn-outline">
                                        My Portfolio
                                    </a>
                                    &nbsp;&nbsp;&nbsp;    
                                    <a href="" className="btn btn-smart">
                                        <FaPlay className="play"/>
                                    </a>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="col-6">

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner

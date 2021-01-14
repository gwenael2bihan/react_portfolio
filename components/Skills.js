import React from 'react'
import image from '../images/slash.jpg'

import { FaGithub } from "react-icons/fa"

const skillData = [
    {
        img: image,
        title: 'titre',
        company: 'company name',
        description: 'description'
    },
    {
        img: image,
        title: 'titre',
        company: 'company name',
        description: 'description'
    },
    {
        img: image,
        title: 'titre',
        company: 'company name',
        description: 'description'
    },
    {
        img: image,
        title: 'titre',
        company: 'company name',
        description: 'description'
    },
];

const Skills = () => {
    return (
        <div className="skills">
            <div className="container">
                <div className="skills__header">
                    <div className="common">
                        <h3 className="heading">Skills</h3>
                        <h1 className="mainHeader">
                            Some of my projects
                    </h1>
                        <div className="row bgMain">
                            {skillData.map((skill) => (
                                <div className="col-4 bgMain">
                                    <div className="skills__box">
                                        <FaGithub className="commonIcon" />
                                        <img className="skills__box-img" src={skill.img} alt={skill.title} />
                                        <div className="skills__box-header">{skill.title}</div>
                                        <div className="skills__box-company">{skill.company}</div>
                                        <div className="skills__box-p">{skill.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <p className="mainContent">
                            CONTENTE sdfsdfsdf sdfsdfsdf
                        </p> */}
                        <div className="commonBorder"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills

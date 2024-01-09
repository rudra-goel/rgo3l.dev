import React from 'react'
import TopRight from "../Images/Top-Right.svg"

export default function ExperienceTile({ data }) {
  return (
    <>
            <div className="position">
                {data.Position}
            </div>

            <div className="position-information">
                <div >
                     {data.Date} | 
                </div>
                <div className="position-information-item">
                    <a className="link" href={data.Link} target="__blank">{data.Company}</a>
                    <img className="link-out-arrow" src={TopRight} alt="Link out Arrow"/>
                </div>
                <div>
                    | {data.Location}
                </div>
            </div>
            
            <div className="breif-experience-description">
                {data.Description}
            </div>

            <div className="skills-developed">
                {
                    data.Skills.map((skill, i) => {
                        return (
                            <div className="skill-wrapper">
                                {skill}
                            </div>
                            
                        )
                    })
                }
            </div>

        </>
  )
}

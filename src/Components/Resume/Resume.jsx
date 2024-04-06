import React from 'react'
import './Resume.css'
import { resume } from '../Asset/data'
import ResumeItem from './ResumeItem'


const Resume = () => {
  return (
    <div>
    <section className="resume" id='resume'>
      <h3 className="subtitle_center">Experience & Education</h3>

      <div className="resume_container grid">
        <div className="resume_data">
          {resume.map((val) => {
            if(val.category === 'experience') {
              return <ResumeItem key={val.id} {...val}/>
            }
          })}
        </div>

        <div className="resume_data">
          {resume.map((val) => {
            if(val.category === 'education') {
              return <ResumeItem  key={val.id} {...val}/>
            }
          })}
        </div>
      </div>
      </section>
    </div>
  )
}

export default Resume
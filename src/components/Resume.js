import React from 'react';
const Resume = ({ resumeData }) => {

    return (
        <React.Fragment>
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.StudiesName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>

                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>


          <div className="row languages">

              <div className="three columns header-col">
                  <h1><span>Languages</span></h1>
              </div>

              <div className="nine columns main-col">

                  <p>
                      {resumeData.languageDescription}
                  </p>

                  <div className="bars">

                      <ul className="languages">
                          {
                              resumeData.languages && resumeData.languages.map((item) => {
                                  return(
                                      <li>
                      <span className={`bar-expand ${item.languageName.toLowerCase()}`}>
                      </span><em>{item.languageName}</em>
                                      </li>

                                  )
                              })
                          }

                      </ul>

                  </div>

              </div>

          </div>

      </section>
        </React.Fragment>
    );

}

export default  Resume;
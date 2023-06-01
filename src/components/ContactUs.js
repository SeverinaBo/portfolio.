import React from 'react';
const Footer = ({ resumeData }) => {

    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
             I am open for full-time or part-time work opportunities. Feel free to contact me
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                  <h4>
                      LinkedIn:{" "}
                      <a href={resumeData.linkedinId} target="_blank" rel="noopener noreferrer">
                          {resumeData.linkedinId}
                      </a>
                  </h4>
                  <h4>
                      Email:{" "}
                      <a href={`mailto:${resumeData.gmail}`} target="_blank" rel="noopener noreferrer">
                          {resumeData.gmail}
                      </a>
                  </h4>
              </div>
            </aside>
          </div>
        </section>
        );

}
export default Footer;
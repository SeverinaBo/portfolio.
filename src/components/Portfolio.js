import React from 'react';
const Portfolio = ({ resumeData }) => {

    return (
        <React.Fragment>
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                  <div className="columns portfolio-item">
                      <div className="item-wrap">

                              <img src={`${item.imgurl}`} alt="projekto vaizdas" className="item-img" />
                              <div className="overlay">
                                  <div className="portfolio-item-meta">
                                      <h5>{item.name}</h5>
                                      <p>{item.description}</p>
                                  </div>
                              </div>

                      </div>
                      <button onClick={() => window.open(item.link, '_blank')} className="link-button"> See more
                      </button>
                  </div>

              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        </React.Fragment>
        );

}

export default Portfolio;
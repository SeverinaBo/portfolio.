import React from 'react';

const Quotes = ({ resumeData }) => {
  return (
      <React.Fragment>
        <section id="quotes">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Favourite Quotes</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    {resumeData.quotes && resumeData.quotes.map((item, index) => (
                        <li key={index}>
                          <blockquote>
                            <p>{item.description}</p>
                            <cite>{item.name}</cite>
                          </blockquote>
                        </li>
                    ))}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section>
     {/*   <section className="spotify">
          <iframe style={{ borderRadius: '20px' }}
                  src="https://open.spotify.com/embed/playlist/1o0gsbIQt8PbkTTSVbCnxK?utm_source=generator"
                  width="100%" height="352" frameBorder="0" allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"></iframe>
        </section>*/}
      </React.Fragment>
  );
}

export default Quotes;

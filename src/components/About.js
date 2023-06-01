import React from 'react';

const About = ({resumeData}) => {

    return (
        <React.Fragment>
            <section id="about">
                <div className="row">

                    <div className="three columns">

                        <img className="profile-pic" src="images/profilepic.jpg" alt=""/>

                    </div>

                    <div className="nine columns main-col">

                        <h2>An ambitious junior full-Stack/Java Developer</h2>
                        <p>{resumeData.aboutme}</p>

                        <div className="row">
                            <h2>My Spotify playlist for deep coding mode</h2>
                        </div>
                        <section>
                            <iframe style={{borderRadius: '12px'}}
                                    src="https://open.spotify.com/embed/playlist/1o0gsbIQt8PbkTTSVbCnxK?utm_source=generator&theme=0"
                                    width="100%" height="152" frameBorder="0" allowFullScreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                    loading="lazy"></iframe>
                        </section>

                    </div>
                </div>


            </section>

        </React.Fragment>
    );

}

export default About;
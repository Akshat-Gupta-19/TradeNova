import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-top'>
                <h1 className='text-center'>Our Team</h1>
            </div>

            <div
                className='row text-muted'
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className='col p-5 text-center'>
                    <img
                        src='media/images/Akshat.jpeg'
                        style={{ borderRadius: "100%", width: "50%" }}
                        alt='Founder'
                    />

                    <h4 className='mt-5'>Akshat Gupta</h4>
                    <h6>Founder & Full Stack Developer</h6>
                </div>

                <div className='col p-5'>
                    <p>
                        TradeNova is a full-stack trading platform developed with
                        the vision of making investing simple, intuitive, and
                        technology-driven. The project demonstrates modern web
                        development practices using the MERN stack.
                    </p>

                    <p>
                        The platform focuses on providing a clean user
                        experience, secure authentication, portfolio management,
                        watchlists, and responsive trading dashboards.
                    </p>

                    <p>
                        TradeNova reflects a passion for software engineering,
                        finance, and building scalable web applications with
                        modern technologies.
                    </p>

                    <p>
                        Connect on <a href=''>GitHub</a> / <a href=''>LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
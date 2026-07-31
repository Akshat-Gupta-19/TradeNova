import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5'>
                <h1 className='fs-2 text-center'>
                    Empowering investors with smart technology and a seamless trading experience.
                </h1>
            </div>

            <div
                className='row p-5 mt-5 border-top text-muted'
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className='col p-5'>
                    <p>
                        TradeNova was created with a vision to make investing and
                        trading simple, accessible, and transparent for everyone.
                        Our goal is to provide a modern platform where users can
                        confidently manage their investments with ease.
                    </p>

                    <p>
                        By combining innovative technology with an intuitive user
                        experience, TradeNova helps traders monitor markets,
                        manage portfolios, and execute trades efficiently.
                    </p>

                    <p>
                        We believe that financial markets should be accessible to
                        everyone, whether you are a beginner exploring investing
                        or an experienced trader looking for powerful tools.
                    </p>
                </div>

                <div className='col p-5'>
                    <p>
                        Along with our trading platform, we focus on financial
                        education by providing helpful resources, market insights,
                        and learning materials that enable users to make informed
                        investment decisions.
                    </p>

                    <p>
                        TradeNova continuously evolves by introducing new
                        features, improving performance, and adopting the latest
                        technologies to deliver a secure and reliable experience.
                    </p>

                    <p>
                        Our mission is to build a trusted digital investment
                        ecosystem where technology, simplicity, and innovation
                        come together to help every investor achieve their
                        financial goals.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
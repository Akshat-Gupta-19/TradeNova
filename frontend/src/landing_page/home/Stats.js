import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Built for Every Investor</h1>
                    <h2 className='fs-4'>Security You Can Trust</h2>
                    <p className='text-muted'>
                        TradeNova is designed with secure authentication,
                        encrypted communication, and modern technologies to help
                        keep your account and data protected.
                    </p>
                    <h2 className='fs-4'>Simple & Intuitive Experience</h2>
                    <p className='text-muted'>
                        A clean interface makes it easy to monitor your
                        portfolio, track market movements, and place trades
                        without unnecessary complexity.
                    </p>
                    <h2 className='fs-4'>Powerful Trading Tools</h2>
                    <p className='text-muted'>
                        Access watchlists, portfolio management, market charts,
                        order tracking, and real-time insights from one unified
                        platform.
                    </p>
                    <h2 className='fs-4'>Continuous Innovation</h2>
                    <p className='text-muted'>
                        We continuously improve TradeNova by introducing new
                        features and enhancing performance to deliver a better
                        investing experience.
                    </p>
                </div>
                <div className='col-6 p-5'>
                    <img
                        src='media/images/2.png'
                        style={{ width: "620px" }}
                        alt='TradeNova Platform'
                    />
                    <div className='text-center p-5'>
                        <a
                            href=''
                            className='mx-5'
                            style={{ textDecoration: "none" }}
                        >
                            Explore Features <i className="fa-solid fa-arrow-right-long"></i>
                        </a>

                        <a
                            href=''
                            style={{ textDecoration: "none" }}
                        >
                            View Dashboard
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
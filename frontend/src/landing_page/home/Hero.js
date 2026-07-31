import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img
                    src='media/images/111.png'
                    alt='TradeNova Hero'
                    className='mb-5'
                />

                <h1 className='mt-5'>
                    Trade Smarter. Invest Better.
                </h1>

                <p>
                    A modern trading platform to invest in stocks, ETFs, mutual
                    funds, derivatives, and more with speed, security, and
                    simplicity.
                </p>

                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default Hero;
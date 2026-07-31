import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                <h1>Pricing</h1>
                <h3 className='text-muted mt-3 fs-4'>
                    Transparent plans with no hidden surprises
                </h3>
            </div>

            <div className='row p-5 text-center'>

                <div className='col-4 p-5'>
                    <img src='media/images/4.png' alt='Investing' style={{width:"230px"}}/>

                    <h2>Stock Investing</h2>

                    <p className='mt-4 text-muted'>
                        Invest in stocks with a secure and intuitive platform
                        designed for long-term wealth creation and seamless order execution.
                    </p>
                </div>

                <div className='col-4 p-5'>
                    <img src='media/images/5.png' alt='Trading' style={{width:"230px"}}/>

                    <h2>Active Trading</h2>

                    <p className='mt-4 text-muted'>
                        Experience fast order execution, advanced charting tools,
                        and transparent pricing for intraday and derivatives trading.
                    </p>
                </div>

                <div className='col-4 p-5'>
                    <img src='media/images/4.png' alt='Portfolio' style={{width:"230px"}}/>

                    <h2>Investment Solutions</h2>

                    <p className='mt-4 text-muted'>
                        Build a diversified portfolio with access to mutual funds,
                        ETFs, and other investment products through a single platform.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Hero;
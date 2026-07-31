import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
            <div className='text-center mt-5 p-3 mb-5'>
                <h1>TradeNova Products</h1>

                <h3 className='text-muted mt-3 fs-4'>
                    Smart, secure, and powerful tools for every investor
                </h3>

                <p className='mt-3'>
                    Explore our <a href='' style={{ textDecoration: "none" }}>trading & investment solutions →</a>
                </p>
            </div>
        </div>
    );
}

export default Hero;
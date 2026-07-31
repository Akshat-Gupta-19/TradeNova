import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">

            <div id='supportWrapper'>
                <h4 className='mt-4'>TradeNova Help Center</h4>

                <a href="" className='mt-4'>
                    View Support Requests
                </a>
            </div>

            <div className='container'>
                <div className='row p-5'>

                    <div className='col-6 p-5'>

                        <h1 className='fs-3'>
                            Search our knowledge base or explore help topics to
                            find answers quickly.
                        </h1>

                        <input
                            placeholder='Search for trading, investing or account related topics...'
                            id="ticketInput"
                        />

                        <br />

                        <a href=''>Open a New Account</a>&nbsp;&nbsp;
                        <a href=''>Verify KYC</a>&nbsp;&nbsp;
                        <a href=''>Trading Guide</a>&nbsp;&nbsp;
                        <a href=''>Platform Tutorials</a>

                    </div>

                    <div className='col-1'></div>

                    <div className='col-5 p-5' id="featuredDiv">

                        <h1 className='fs-3'>Popular Help Topics</h1>

                        <a href=''>
                            1. How to create and verify your TradeNova account
                        </a>
                        <br />

                        <a href=''>
                            2. Understanding trading, investing and portfolio management
                        </a>
                        <br />

                        <a href=''>
                            3. Security tips for protecting your account
                        </a>

                    </div>

                </div>
            </div>

        </section>
    );
}

export default Hero;
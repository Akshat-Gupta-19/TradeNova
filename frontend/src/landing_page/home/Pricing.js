import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'>Simple & Transparent Pricing</h1>

                    <p>
                        TradeNova is designed with transparency in mind. No hidden
                        fees, no confusing plans—just a straightforward experience
                        for modern investors.
                    </p>

                    <a href='' style={{ textDecoration: "none" }}>
                        Explore Pricing <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

                <div className='col-2'></div>

                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col-6 border p-3'>
                            <h1 className='mb-3'>₹0*</h1>

                            <p>
                                Demo account setup and
                                <br />
                                portfolio tracking
                            </p>
                        </div>

                        <div className='col-6 border p-3'>
                            <h1 className='mb-3'>Low Fees</h1>

                            <p>
                                Competitive brokerage
                                <br />
                                with transparent pricing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
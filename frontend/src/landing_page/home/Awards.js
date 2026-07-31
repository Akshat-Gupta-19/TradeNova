import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/1.png' alt='TradeNova Platform' style={{width:"90%",height:"450px"}}/>
                </div>

                <div className='col-6 p-5 mt-5'>
                    <h1>Everything you need to invest smarter</h1>

                    <p className='mb-5'>
                        TradeNova provides a modern trading experience with
                        powerful tools, real-time market insights, and a simple,
                        user-friendly interface for every investor.
                    </p>

                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Futures & Options</p></li>
                                <li><p>Mutual Funds</p></li>
                            </ul>
                        </div>

                        <div className='col-6'>
                            <ul>
                                <li><p>ETFs</p></li>
                                <li><p>Commodities</p></li>
                                <li><p>Bonds & Securities</p></li>
                            </ul>
                        </div>
                    </div>

                    <p className='text-muted mt-4'>
                        Designed with simplicity, speed, and security to help
                        investors manage their financial journey with confidence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Awards;
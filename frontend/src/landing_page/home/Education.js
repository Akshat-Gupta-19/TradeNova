import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img
                        src='media/images/education.svg'
                        style={{ width: "70%" }}
                        alt='Learning'
                    />
                </div>

                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>
                        Learn, Invest & Grow with Confidence
                    </h1>

                    <p>
                        Explore beginner-friendly investment guides, trading
                        concepts, and practical resources designed to help you
                        build a strong foundation in the financial markets.
                    </p>

                    <a href='' style={{ textDecoration: "none" }}>
                        Learning Center <i className="fa-solid fa-arrow-right-long"></i>
                    </a>

                    <p className='mt-5'>
                        Join our growing community to discuss market trends,
                        share ideas, and learn from fellow investors in a
                        collaborative environment.
                    </p>

                    <a href='' style={{ textDecoration: "none" }}>
                        Community Forum <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
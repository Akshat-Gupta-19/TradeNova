import React from 'react';

function Footer() {
    return (
        <footer style={{backgroundColor:"#F5F5F5"}}>
        <div className='container border-top mt-5'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src="media/images/imagecopy1.png" style={{width:"92%"}}/>
                    <p>© 2026 TradeNova. Built for educational purposes.</p>
                </div>
                <div className='col'>
                    <p className='fs-4'>Company</p>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>About Us</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Our Products</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Pricing</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Partner Program</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Careers</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>TradeNova Labs</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>News & Media</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Community</a><br/>
                </div>
                <div className='col'>
                    <p className='fs-4'>Support</p>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Contact Us</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Help Center</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Knowledge Base</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Brokerage Charges</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Downloads</a><br/>
                </div>
                <div className='col'>
                    <p className='fs-4'>Account</p>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Open Account</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Add Funds</a><br/>
                    <a href='' className="text-muted" style={{textDecoration:"none"}}>Trading Challenges</a><br/>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"14px"}}>
                <p>
                    TradeNova is a modern stock market learning and trading platform created
                    for educational and demonstration purposes. The platform is designed to
                    help users understand investing, trading, portfolio management, and
                    market analysis through an intuitive interface.
                </p>

                <p>
                    All market data, prices, charts, and portfolio values displayed on this
                    website are for demonstration only unless otherwise specified. Users
                    should always verify financial information from official exchanges before
                    making any investment decisions.
                </p>

                <p>
                    Investing in financial markets involves risk. Past performance does not
                    guarantee future returns. TradeNova does not provide financial,
                    investment, or legal advice.
                </p>

                <p>
                    Users are responsible for maintaining the security of their accounts and
                    personal information. Never share your login credentials, OTPs, or
                    confidential information with anyone.
                </p>

                <p>
                    By using this platform, you agree to our Terms of Service and Privacy
                    Policy. Please read all applicable documents before using any financial
                    service.
                </p>

                <p>
                    This project has been developed as part of a full-stack MERN application
                    to demonstrate authentication, portfolio management, watchlists, order
                    management, and responsive user interface design.
                </p>
            </div>
            <div className='row'>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none", fontSize:"14px"}}>NSE </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>BSE </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>MCX </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>MSEI </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>Terms & conditions </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>Policies & procedures </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>Privacy policy </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>Disclosure</a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>Investor Education</a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>Investor charter </a></div>
                <div className='col'><a href='' className="text-muted" style={{textDecoration:"none",fontSize:"14px"}}>Sitemap</a></div>
            </div>
        </div>
        </footer>
     );
}

export default Footer;
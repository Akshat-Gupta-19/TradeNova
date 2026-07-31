import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>

                <h1 className='fs-2 text-center'>
                    How can we help you today?
                </h1>

                {/* Account */}
                <div className='col-4 p-5 mt-5 mb-5'>

                    <h1 className='fs-4'>
                        <i className="fa-solid fa-circle-plus fs-6"></i> Account & Registration
                    </h1>

                    <div className='mt-5'>
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Create a New Account</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Complete KYC Verification</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Update Personal Information</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Account Verification</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Account Charges</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting Started Guide</a><br />
                    </div>

                </div>

                {/* Profile */}
                <div className='col-4 p-5 mt-5 mb-5'>

                    <h1 className='fs-4'>
                        <i className="fa-solid fa-user fs-6"></i> Account Management
                    </h1>

                    <div className='mt-5'>
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Login & Password</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Update Profile</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Bank Account Details</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Security Settings</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Manage Linked Accounts</a><br />
                    </div>

                </div>

                {/* Trading */}
                <div className='col-4 p-5 mt-5 mb-5'>

                    <h1 className='fs-4'>
                        <i className="fa-solid fa-chart-column fs-6"></i> Trading & Investments
                    </h1>

                    <div className='mt-5'>
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Stocks & ETFs</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Mutual Funds</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Order Types</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Market Data</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>TradeNova API</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Developer Resources</a><br />
                        <a href='' style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports & Analytics</a><br />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CreateTicket;
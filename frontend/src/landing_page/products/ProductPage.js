import React from 'react';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return (
        <>
            <Hero />

            <LeftSection
                imageUrl="media/images/11.png"
                productName="TradeNova Trade"
                productDescription="A fast and intuitive trading platform with real-time market data, advanced charting, smart watchlists, and seamless order execution. Designed for both beginners and experienced traders."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageUrl="media/images/22.png"
                productName="Portfolio Hub"
                productDescription="Monitor your investments with a powerful portfolio dashboard. Track holdings, analyze performance, review transactions, and gain valuable insights through interactive reports."
                learnMore=""
            />

            <LeftSection
                imageUrl="media/images/33.png"
                productName="TradeNova Invest"
                productDescription="Build long-term wealth by investing in stocks, ETFs, and mutual funds through a clean and user-friendly investment platform with transparent pricing."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageUrl="media/images/44.png"
                productName="TradeNova API"
                productDescription="Power your own fintech applications with secure REST APIs for market data, portfolio management, authentication, and order execution."
                learnMore=""
            />

            <LeftSection
                imageUrl="media/images/55.png"
                productName="TradeNova Learn"
                productDescription="Master investing with structured courses, market tutorials, trading strategies, and practical examples. Learn anytime through our interactive learning platform."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <p className='text-center fs-5 mt-5 text-muted'>
                Discover how TradeNova combines modern technology, security,
                and innovation to create a seamless investing experience.
            </p>

            <Universe />
        </>
    );
}

export default ProductPage;
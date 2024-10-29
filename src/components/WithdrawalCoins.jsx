// src/components/Withdrawal.js
import React from 'react';
import './styles/WithdrawalCoins.css'; // You can create a CSS file for styles

const Withdrawal = () => {
    return (
        <div className="withdrawal-container">
            <h2>Withdraw Options</h2>
            <div className="withdrawal-option" id="amazon-pay">
                <h3>Amazon Pay Gift Voucher</h3>
                <p>Redeem your coins for an Amazon Pay gift voucher!</p>
                <button>Withdraw</button>
            </div>
            <div className="withdrawal-option" id="flipkart">
                <h3>Flipkart Gift Voucher</h3>
                <p>Redeem your coins for a Flipkart gift voucher!</p>
                <button>Withdraw</button>
            </div>
            <div className="withdrawal-option" id="google-play">
                <h3>Google Play Gift Card Code</h3>
                <p>Redeem your coins for a Google Play gift card code!</p>
                <button>Withdraw</button>
            </div>
        </div>
    );
};

export default Withdrawal;

import React from 'react';
import './DebitCard.css';

const DebitCard = ({ Balance, cardHolder, expiryDate, Cardnumber, bgColor }) => {
  return (
    <div className="debit-card" style={{ backgroundColor: bgColor }}>
      <div className="card-details">
        <p className="Balance">{Balance}</p>
        <p className="card-holder">{cardHolder}</p>
        <p className="expiry-date">{expiryDate}</p>
        <p className="Card-number">{Cardnumber}</p>
      </div>
    </div>
  );
};

export default DebitCard;

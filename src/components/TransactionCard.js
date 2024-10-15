import React from 'react';
import './TransactionCard.css';

const TransactionCard = ({ title, amount, date }) => {
  return (
    <div className="transaction-card">
      <div className="transaction-details">
        <p className="transaction-title">{title}</p>
        <p className="transaction-amount">{amount}</p>
        <p className="transaction-date">{date}</p>
      </div>
    </div>
  );
};

export default TransactionCard;

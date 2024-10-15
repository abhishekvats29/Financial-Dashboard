import React, { useState, useEffect } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import ChartConfig from '../components/ChartConfig'; // Ensure this path is correct
import './Dashboard.css';
import DebitCard from '../components/DebitCard';
import TransactionCard from '../components/TransactionCard';

const Dashboard = () => {
  const [query, setQuery] = useState('');
  const [chartData, setChartData] = useState(null);
  const [expenseData, setExpenseData] = useState(null);
  const [balanceData, setBalanceData] = useState(null);

  useEffect(() => {
    fetch('/data/dashboardData.json')
      .then((response) => response.json())
      .then((data) => {
        setChartData(data.weeklyActivity);
        setExpenseData(data.expenseStatistics);
        setBalanceData(data.balanceHistory);
      });
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search query:', query);
  };

  return (
    <div className='header'>
      <h4>Overview</h4>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="dashboard-container">
        <h4>My Cards</h4>
        <div className="cards-container">
          <DebitCard
            Balance="Balance=$5756"
            cardHolder="Eddy Cusuma valid - 12/22"
            expiryDate="3778 **** **** 1234"
            bgColor="blue"
          />
          <TransactionCard title="Deposit from my card" amount="$150.00" date="2023-10-01" />
          <TransactionCard title="Deposit from paypal" amount="$89.99" date="2023-10-02" />
        </div>
      </div>
      <div className="chart">
        
        <div className="Bar-chart">
          <h3>Weekly Activity</h3>
          {chartData && <Bar data={chartData} options={{ responsive: true }} />}
        </div>
        <div className="Pie-chart">
          <h3>Expense Statistics</h3>
          {expenseData && <Pie data={expenseData} options={{ responsive: true }} />}
        </div>
        <div className="Line-chart">
          <h3>Balance History</h3>
          {balanceData && <Line data={balanceData} options={{ responsive: true }} />}
        </div>
      </div>
    </div>
    
  );
};

export default Dashboard;

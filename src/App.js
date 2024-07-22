import React from 'react';
import './App.css'; // Make sure to create this CSS file

const App = () => {
  return (
    <div className="root">
      <div className="sidebar">
        <div className="profile">
          <img src="/static/images/avatar/1.jpg" alt="Mary" className="avatar" />
          <div className="profile-info">
            <h2>Hello, Mary</h2>
          </div>
        </div>
        <ul className="nav-list">
          <li><i className="flaticon-dashboard"></i>Dashboard</li>
          <li><i className="flaticon-users"></i>Members</li>
          <li><i className="flaticon-request"></i>Requests</li>
          <li><i className="flaticon-receipt"></i>Invoices</li>
          <li><i className="flaticon-credit-card"></i>Transactions</li>
          <li><i className="flaticon-security"></i>Reports</li>
        </ul>
      </div>
      <div className="content">
        <h1>Our Services</h1>
        <div className="grid">
          <div className="card">
            <i className="flaticon-dashboard icon"></i>
            <h3>Digital Banking</h3>
            <p>Manage all your banking needs with our digital solutions.</p>
          </div>
          <div className="card">
            <i className="flaticon-analysis icon"></i>
            <h3>Expense Analysis</h3>
            <p>Analyze your spending patterns and save more effectively.</p>
          </div>
          <div className="card">
            <i className="flaticon-budget icon"></i>
            <h3>Budget Planning</h3>
            <p>Plan your budget with our intuitive tools and resources.</p>
          </div>
          <div className="card">
            <i className="flaticon-schedule icon"></i>
            <h3>Scheduled Payments</h3>
            <p>Schedule and manage your recurring payments seamlessly.</p>
          </div>
          <div className="card">
            <i className="flaticon-payroll icon"></i>
            <h3>Automatic Payroll</h3>
            <p>Automate payroll processes for your business with ease.</p>
          </div>
          <div className="card">
            <i className="flaticon-security icon"></i>
            <h3>Data Security</h3>
            <p>Ensure the highest level of security for your data and transactions.</p>
          </div>
        </div>
        <h1>Today's Insights</h1>
        <div className="grid">
          <div className="card">
            <h3>Requests</h3>
            <ul>
              <li>Jacqueline is requesting payment for AWS</li>
              <li>Noah is requesting more space on iCloud Storage</li>
              <li>Samantha is requesting payment for AppStore by Apple</li>
              <li>James is requesting payment for AppStore by Apple</li>
            </ul>
          </div>
          <div className="card">
            <h3>Last Transactions</h3>
            <ul>
              <li>$199.00 - automatic payroll</li>
              <li>$21.50 - subscription</li>
              <li>$89.99 - recurrent</li>
              <li>$21.50 - subscription</li>
            </ul>
          </div>
          <div className="card">
            <h3>Subscriptions</h3>
            <ul>
              <li>iCloud - Apple, Inc.</li>
              <li>Amazon AWS - Amazon, Inc.</li>
              <li>Stripe Payment - Stripe, Inc.</li>
              <li>Atlassian - Atlassian Corp, Plc.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

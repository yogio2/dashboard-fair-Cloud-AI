import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import './dashboard.css'; // Create a CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="autopilot-section">
        <div className="autopilot-button">
          <p>Autopilot</p>
          <div className="circle">
            <div className="circle-inner"><FontAwesomeIcon icon={faPowerOff} /></div>
          </div>
          <p className="enabled">Enabled</p>
        </div>
      </div>

      <div className="savings-summary">
        <h3>Savings Summary</h3>
        <div className="savings-chart">
          <div className="savings-details">
            <p><span className="approved"></span> Approved: $1,091,994</p>
            <p><span className="unapproved"></span> Unapproved: $80,102</p>
          </div>
          <div className="donut-chart">
            <div className="inner-donut"></div>
          </div> {/* Simulate donut chart */}
        </div>
      </div>

      <div className="annual-expenditure">
        <h3>Annual Expenditure</h3>
        <p>$1,020,123.23</p>
      </div>

      <div className="annual-savings">
        <h3>Annual Savings</h3>
        <p>$677,191.90</p>
      </div>
    </div>
  );
};

export default Dashboard;
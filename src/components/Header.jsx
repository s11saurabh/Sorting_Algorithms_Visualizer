import React from 'react';
import { FaSortAmountDown } from 'react-icons/fa';
import KeyboardShortcuts from './KeyboardShortcuts';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <FaSortAmountDown className="logo-icon" />
          <h1>Sorting Visualizer By Saurabh Kumar</h1>
        </div>
        <div className="header-text">
          <p>Visualize sorting algorithms in action</p>
        </div>
      </div>
      <KeyboardShortcuts />
    </header>
  );
};

export default Header;
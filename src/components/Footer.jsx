import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="algorithm-info-cards">
        <div className="algo-card">
          <h4>Bubble Sort</h4>
          <p>Time Complexity: O(n²)</p>
          <p>Space Complexity: O(1)</p>
        </div>
        <div className="algo-card">
          <h4>Insertion Sort</h4>
          <p>Time Complexity: O(n²)</p>
          <p>Space Complexity: O(1)</p>
        </div>
        <div className="algo-card">
          <h4>Selection Sort</h4>
          <p>Time Complexity: O(n²)</p>
          <p>Space Complexity: O(1)</p>
        </div>
        <div className="algo-card">
          <h4>Quick Sort</h4>
          <p>Time Complexity: O(n log n)</p>
          <p>Space Complexity: O(log n)</p>
        </div>
        <div className="algo-card">
          <h4>Merge Sort</h4>
          <p>Time Complexity: O(n log n)</p>
          <p>Space Complexity: O(n)</p>
        </div>
        <div className="algo-card">
          <h4>Shell Sort</h4>
          <p>Time Complexity: O(n log² n)</p>
          <p>Space Complexity: O(1)</p>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} Sorting Visualizer Developed By Saurabh Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
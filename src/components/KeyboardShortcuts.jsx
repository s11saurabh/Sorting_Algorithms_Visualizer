import React, { useState } from 'react';
import { FaKeyboard, FaTimes } from 'react-icons/fa';
import '../styles/KeyboardShortcuts.css';

const KeyboardShortcuts = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="keyboard-shortcuts">
      <button className="shortcut-btn" onClick={toggleVisibility} title="Keyboard Shortcuts">
        <FaKeyboard />
      </button>
      
      {isVisible && (
        <div className="shortcuts-modal">
          <div className="shortcuts-content">
            <div className="shortcuts-header">
              <h3>Keyboard Shortcuts</h3>
              <button className="close-btn" onClick={toggleVisibility}>
                <FaTimes />
              </button>
            </div>
            
            <div className="shortcuts-list">
              <div className="shortcut-item">
                <span className="shortcut-key">Space</span>
                <span className="shortcut-desc">Pause/Resume sorting</span>
              </div>
              <div className="shortcut-item">
                <span className="shortcut-key">→</span>
                <span className="shortcut-desc">Step forward</span>
              </div>
              <div className="shortcut-item">
                <span className="shortcut-key">←</span>
                <span className="shortcut-desc">Step backward</span>
              </div>
              <div className="shortcut-item">
                <span className="shortcut-key">Home</span>
                <span className="shortcut-desc">Skip to beginning</span>
              </div>
              <div className="shortcut-item">
                <span className="shortcut-key">End</span>
                <span className="shortcut-desc">Skip to end</span>
              </div>
              <div className="shortcut-item">
                <span className="shortcut-key">R</span>
                <span className="shortcut-desc">Randomize array</span>
              </div>
              <div className="shortcut-item">
                <span className="shortcut-key">↑</span>
                <span className="shortcut-desc">Increase speed</span>
              </div>
              <div className="shortcut-item">
                <span className="shortcut-key">↓</span>
                <span className="shortcut-desc">Decrease speed</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KeyboardShortcuts;
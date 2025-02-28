import React, { useState } from 'react';
import { 
  FaRandom, 
  FaSortNumericDown, 
  FaSortNumericUp,
  FaSort,
  FaExchangeAlt,
  FaSortAmountDown,
  FaSortAmountUp,
  FaRulerVertical,
  FaTachometerAlt,
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaFastForward,
  FaFastBackward,
  FaExpand,
  FaRedo
} from 'react-icons/fa';
import '../styles/Controls.css';

const Controls = ({ 
  resetArray, 
  arraySize, 
  animationSpeed, 
  isSorting, 
  onSizeChange, 
  onSpeedChange,
  setIsSorting,
  setSortingAlgorithm,
  currentAlgorithm,
  isPaused,
  setIsPaused,
  onStepForward,
  onStepBackward,
  onSkipForward,
  onSkipBackward,
  canvasWidth,
  setCanvasWidth,
  canvasHeight,
  setCanvasHeight,
  moveControlsPosition,
  sortingCompleted
}) => {
  const [widthInput, setWidthInput] = useState(canvasWidth);
  const [heightInput, setHeightInput] = useState(canvasHeight);
  
  const handleSortClick = (algorithm) => {
    if (isSorting && !isPaused) return;
    if (sortingCompleted) return; 
    
    setSortingAlgorithm(algorithm);
    setIsSorting(true);
    setIsPaused(false);
  };

  const handleCanvasSizeChange = () => {
    setCanvasWidth(parseInt(widthInput) || 1000);
    setCanvasHeight(parseInt(heightInput) || 500);
  };

  const handleRestartClick = () => {
   
    window.location.reload();
  };

  return (
    <div className="controls">
      <div className="control-section">
        <h3>Array Controls</h3>
        <button 
          className="control-btn" 
          onClick={resetArray} 
          disabled={isSorting && !isPaused}
          title="Generate new random array"
        >
          <FaRandom /> {sortingCompleted ? "New Array" : "Randomize Array"}
        </button>
        
        <div className="slider-container">
          <div className="slider-label">
            <FaRulerVertical />
            <span>Array Size: {arraySize}</span>
          </div>
          <input 
            type="range" 
            min="10" 
            max="100" 
            value={arraySize} 
            onChange={(e) => onSizeChange(parseInt(e.target.value))} 
            disabled={(isSorting && !isPaused) || sortingCompleted}
            className={sortingCompleted ? "slider disabled" : "slider"}
          />
        </div>
        
        <div className="slider-container">
          <div className="slider-label">
            <FaTachometerAlt />
            <span>Animation Speed: {animationSpeed}</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="10" 
            value={animationSpeed} 
            onChange={(e) => onSpeedChange(parseInt(e.target.value))} 
            disabled={isSorting && !isPaused}
            className="slider"
          />
        </div>

        <button 
          className="control-btn restart-btn" 
          onClick={handleRestartClick}
          title="Restart the application"
        >
          <FaRedo /> Restart
        </button>
      </div>
      
      <div className="control-section">
        <h3>Sorting Algorithms</h3>
        <div className="sorting-buttons">
          <button 
            className={`sort-btn ${currentAlgorithm === 'bubble' ? 'active' : ''}`} 
            onClick={() => handleSortClick('bubble')} 
            disabled={(isSorting && !isPaused) || sortingCompleted}
            title="Bubble Sort"
          >
            <FaSort /> Bubble Sort
          </button>
          
          <button 
            className={`sort-btn ${currentAlgorithm === 'insertion' ? 'active' : ''}`} 
            onClick={() => handleSortClick('insertion')} 
            disabled={(isSorting && !isPaused) || sortingCompleted}
            title="Insertion Sort"
          >
            <FaSortNumericDown /> Insertion Sort
          </button>
          
          <button 
            className={`sort-btn ${currentAlgorithm === 'selection' ? 'active' : ''}`} 
            onClick={() => handleSortClick('selection')} 
            disabled={(isSorting && !isPaused) || sortingCompleted}
            title="Selection Sort"
          >
            <FaSortNumericUp /> Selection Sort
          </button>
          
          <button 
            className={`sort-btn ${currentAlgorithm === 'quick' ? 'active' : ''}`} 
            onClick={() => handleSortClick('quick')} 
            disabled={(isSorting && !isPaused) || sortingCompleted}
            title="Quick Sort"
          >
            <FaExchangeAlt /> Quick Sort
          </button>
          
          <button 
            className={`sort-btn ${currentAlgorithm === 'merge' ? 'active' : ''}`} 
            onClick={() => handleSortClick('merge')} 
            disabled={(isSorting && !isPaused) || sortingCompleted}
            title="Merge Sort"
          >
            <FaSortAmountDown /> Merge Sort
          </button>
          
          <button 
            className={`sort-btn ${currentAlgorithm === 'shell' ? 'active' : ''}`} 
            onClick={() => handleSortClick('shell')} 
            disabled={(isSorting && !isPaused) || sortingCompleted}
            title="Shell Sort"
          >
            <FaSortAmountUp /> Shell Sort
          </button>
        </div>
        
        {sortingCompleted && (
          <div className="info-message">
            <p>Sorting completed. Click "New Array" to start again.</p>
          </div>
        )}
      </div>

      <div className="control-section">
        <h3>Animation Controls</h3>
        <div className="animation-controls">
          <button 
            className="control-btn" 
            onClick={onSkipBackward} 
            disabled={!isSorting && !sortingCompleted}
            title="Skip to beginning"
          >
            <FaFastBackward /> Skip Back
          </button>
          
          <button 
            className="control-btn" 
            onClick={onStepBackward} 
            disabled={!isSorting && !sortingCompleted}
            title="Step backward"
          >
            <FaStepBackward /> Step Back
          </button>
          
          <button 
            className="control-btn" 
            onClick={() => setIsPaused(!isPaused)} 
            disabled={(!isSorting && !sortingCompleted) || (sortingCompleted && !isSorting)}
            title={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ? <FaPlay /> : <FaPause />} {isPaused ? "Resume" : "Pause"}
          </button>
          
          <button 
            className="control-btn" 
            onClick={onStepForward} 
            disabled={!isSorting && !sortingCompleted}
            title="Step forward"
          >
            <FaStepForward /> Step Forward
          </button>
          
          <button 
            className="control-btn" 
            onClick={onSkipForward} 
            disabled={!isSorting && !sortingCompleted}
            title="Skip to end"
          >
            <FaFastForward /> Skip Forward
          </button>
        </div>
      </div>

      <div className="control-section">
        <h3>Canvas Controls</h3>
        <div className="canvas-controls">
          <div className="input-container">
            <label>W:</label>
            <input 
              type="number" 
              min="500" 
              max="2000" 
              value={widthInput} 
              onChange={(e) => setWidthInput(e.target.value)}
              className="size-input" 
            />
          </div>
          
          <div className="input-container">
            <label>H:</label>
            <input 
              type="number" 
              min="300" 
              max="1000" 
              value={heightInput} 
              onChange={(e) => setHeightInput(e.target.value)}
              className="size-input" 
            />
          </div>
          
          <button 
            className="control-btn" 
            onClick={handleCanvasSizeChange}
            title="Apply new canvas dimensions"
          >
            <FaExpand /> Change Canvas Size
          </button>
          
          <button 
            className="control-btn" 
            onClick={moveControlsPosition}
            title="Toggle controls position"
          >
            <FaExpand /> Move Controls
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
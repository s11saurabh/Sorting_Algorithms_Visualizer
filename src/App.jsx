import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import Visualizer from './components/Visualizer';
import Controls from './components/Controls';
import Footer from './components/Footer';
import { generateRandomArray } from './utils/arrayHelpers';
import { setupKeyboardEvents } from './utils/keyboardEvents';
import './styles/App.css';

function App() {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(50);
  const [animationSpeed, setAnimationSpeed] = useState(5);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [sortingAlgorithm, setSortingAlgorithm] = useState('');
  const [barWidth, setBarWidth] = useState(10);
  const [animationStep, setAnimationStep] = useState(0);
  const [canvasWidth, setCanvasWidth] = useState(1000);
  const [canvasHeight, setCanvasHeight] = useState(500);
  const [controlsPosition, setControlsPosition] = useState('left'); 
  const [completedArray, setCompletedArray] = useState(null);
  const hasSortingCompleted = useRef(false);

  
  useEffect(() => {
    resetArray();
  }, []);

  
  useEffect(() => {
    if (!isSorting && completedArray === null) {
      resetArray();
    }
  }, [arraySize, isSorting, completedArray]);

 
  useEffect(() => {
    const removeKeyboardEvents = setupKeyboardEvents({
      onStepForward: handleStepForward,
      onStepBackward: handleStepBackward,
      onSkipForward: handleSkipForward,
      onSkipBackward: handleSkipBackward,
      onTogglePause: () => setIsPaused(prev => !prev),
      onRandomize: () => {
        if (!isSorting) {
          setCompletedArray(null);
          hasSortingCompleted.current = false;
          resetArray();
        }
      },
      onSpeedUp: () => setAnimationSpeed(prev => Math.min(prev + 1, 10)),
      onSpeedDown: () => setAnimationSpeed(prev => Math.max(prev - 1, 1)),
      isSorting
    });
    
   
    return removeKeyboardEvents;
  }, [isSorting]);

  const resetArray = useCallback(() => {
    const newArray = generateRandomArray(arraySize, 5, Math.min(canvasHeight - 100, 500));
    setArray(newArray);
    setSortingAlgorithm('');
    setAnimationStep(0);
    setIsSorting(false);
    setIsPaused(false);
    setCompletedArray(null);
    hasSortingCompleted.current = false;
    
   
    const newBarWidth = Math.max(2, Math.min(20, Math.floor(canvasWidth / (arraySize * 1.5))));
    setBarWidth(newBarWidth);
  }, [arraySize, canvasHeight, canvasWidth]);

  const handleSizeChange = (newSize) => {
    if (isSorting && !isPaused) return;
    
   
    if (completedArray === null) {
      setArraySize(newSize);
    }
  };

  const handleSpeedChange = (newSpeed) => {
    setAnimationSpeed(newSpeed);
  };

  const handleStepForward = () => {
    if (!isSorting && completedArray === null) return;
    setIsPaused(true); 
    setAnimationStep(prev => prev + 1);
  };

  const handleStepBackward = () => {
    if (!isSorting && completedArray === null) return;
    setIsPaused(true); 
    setAnimationStep(prev => Math.max(0, prev - 1));
  };

  const handleSkipForward = () => {
    if (!isSorting && completedArray === null) return;
    setIsPaused(true); 
    setAnimationStep(10000); 
    hasSortingCompleted.current = true;
  };

  const handleSkipBackward = () => {
    if (!isSorting && completedArray === null) return;
    setIsPaused(true); 
    setAnimationStep(0);
  };

  const handleReset = () => {
    hasSortingCompleted.current = false;
    setCompletedArray(null);
    resetArray();
  };

  const toggleControlsPosition = () => {
   
    const positions = ['left', 'right', 'top', 'bottom'];
    const currentIndex = positions.indexOf(controlsPosition);
    const nextIndex = (currentIndex + 1) % positions.length;
    setControlsPosition(positions[nextIndex]);
  };

  const getLayoutClass = () => {
    switch(controlsPosition) {
      case 'left': return 'layout-horizontal controls-left';
      case 'right': return 'layout-horizontal controls-right';
      case 'top': return 'layout-vertical controls-top';
      case 'bottom': return 'layout-vertical controls-bottom';
      default: return 'layout-horizontal controls-left';
    }
  };

  return (
    <div className="app">
      <Header />
      <main className={`main-content ${getLayoutClass()}`}>
        <Controls 
          resetArray={handleReset}
          arraySize={arraySize}
          animationSpeed={animationSpeed}
          isSorting={isSorting}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          onSizeChange={handleSizeChange}
          onSpeedChange={handleSpeedChange}
          setIsSorting={setIsSorting}
          setSortingAlgorithm={setSortingAlgorithm}
          currentAlgorithm={sortingAlgorithm}
          onStepForward={handleStepForward}
          onStepBackward={handleStepBackward}
          onSkipForward={handleSkipForward}
          onSkipBackward={handleSkipBackward}
          canvasWidth={canvasWidth}
          setCanvasWidth={setCanvasWidth}
          canvasHeight={canvasHeight}
          setCanvasHeight={setCanvasHeight}
          moveControlsPosition={toggleControlsPosition}
          sortingCompleted={completedArray !== null}
        />
        <Visualizer 
          array={array}
          barWidth={barWidth}
          animationSpeed={animationSpeed}
          isSorting={isSorting}
          setIsSorting={setIsSorting}
          sortingAlgorithm={sortingAlgorithm}
          isPaused={isPaused}
          animationStep={animationStep}
          setAnimationStep={setAnimationStep}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          setArray={setArray}
          completedArray={completedArray}
          setCompletedArray={setCompletedArray}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React, { useState, useEffect, useRef } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort';
import { insertionSort } from '../algorithms/insertionSort';
import { selectionSort } from '../algorithms/selectionSort';
import { quickSort } from '../algorithms/quickSort';
import { mergeSort } from '../algorithms/mergeSort';
import { shellSort } from '../algorithms/shellSort';
import { getArrayStateAtStep } from '../utils/animationHelpers';
import '../styles/Visualizer.css';

const Visualizer = ({ 
  array, 
  barWidth, 
  animationSpeed, 
  isSorting, 
  setIsSorting, 
  sortingAlgorithm,
  isPaused,
  animationStep,
  setAnimationStep,
  canvasWidth,
  canvasHeight,
  setArray,
  completedArray,
  setCompletedArray
}) => {
  const [animations, setAnimations] = useState([]);
  const [colorKey] = useState({
    default: '#3498db',
    comparing: '#e67e22',
    sorted: '#2ecc71',
    pivot: '#e74c3c'
  });
  const [barColors, setBarColors] = useState([]);
  const [displayArray, setDisplayArray] = useState([...array]);
  const animationFrameId = useRef(null);
  const originalArray = useRef([...array]);
  const totalSteps = useRef(0);
  const sortingCompleted = useRef(false);
  
  
  useEffect(() => {
    if (completedArray === null) {
      setBarColors(new Array(array.length).fill(colorKey.default));
      setDisplayArray([...array]);
      originalArray.current = [...array];
      setAnimationStep(0);
      setAnimations([]);
      totalSteps.current = 0;
      sortingCompleted.current = false;
    } else if (completedArray) {
    
      setDisplayArray([...completedArray]);
      setBarColors(new Array(completedArray.length).fill(colorKey.sorted));
      sortingCompleted.current = true;
    }
  }, [array, colorKey.default, setAnimationStep, completedArray]);

 
  useEffect(() => {
    if (sortingAlgorithm && isSorting && !sortingCompleted.current) {
      let sortAnimations = [];
      
     
      switch(sortingAlgorithm) {
        case 'bubble':
          sortAnimations = bubbleSort([...originalArray.current]);
          break;
        case 'insertion':
          sortAnimations = insertionSort([...originalArray.current]);
          break;
        case 'selection':
          sortAnimations = selectionSort([...originalArray.current]);
          break;
        case 'quick':
          sortAnimations = quickSort([...originalArray.current]);
          break;
        case 'merge':
          sortAnimations = mergeSort([...originalArray.current]);
          break;
        case 'shell':
          sortAnimations = shellSort([...originalArray.current]);
          break;
        default:
          break;
      }
      
      setAnimations(sortAnimations);
      totalSteps.current = sortAnimations.length;
      
      if (animationStep === 0 && !isPaused) {
      
        setAnimationStep(0);
      }
    }
  }, [sortingAlgorithm, isSorting, isPaused, animationStep]);

 
  useEffect(() => {
  
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    
    
    if (isSorting && !isPaused && animations.length > 0 && !sortingCompleted.current) {
      runAnimation();
    }
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isSorting, isPaused, animations.length, animationSpeed]);

 
  useEffect(() => {
    if (animations.length > 0) {
      if (animationStep >= 0 && animationStep < animations.length) {
        
        const newDisplayArray = getArrayStateAtStep(
          animations.slice(0, animationStep + 1), 
          originalArray.current,
          animationStep
        );
        setDisplayArray(newDisplayArray);
        applyColorUpdates(animationStep);
      } else if (animationStep >= animations.length && animations.length > 0) {
       
        const finalArray = getArrayStateAtStep(
          animations, 
          originalArray.current,
          animations.length - 1
        );
        
       
        setBarColors(new Array(finalArray.length).fill(colorKey.sorted));
        
       
        setDisplayArray(finalArray);
        
       
        setCompletedArray(finalArray);
        
       
        if (isSorting && !isPaused && animationStep >= animations.length) {
          sortingCompleted.current = true;
          setTimeout(() => setIsSorting(false), 500);
        }
      }
    }
  }, [animationStep, animations, setCompletedArray, isSorting, isPaused, setIsSorting, colorKey.sorted]);

  const runAnimation = () => {
    if (animationStep >= animations.length) {
      return;
    }
    
    const animate = () => {
      if (animationStep < animations.length - 1) {
        setAnimationStep(step => step + 1);
        
       
        const delay = 1000 / (animationSpeed * 2);
        setTimeout(() => {
          animationFrameId.current = requestAnimationFrame(animate);
        }, delay);
      } else {
        
        const finalArray = getArrayStateAtStep(
          animations, 
          originalArray.current,
          animations.length - 1
        );
        
        setBarColors(new Array(finalArray.length).fill(colorKey.sorted));
        setDisplayArray(finalArray);
        setCompletedArray(finalArray);
        
        sortingCompleted.current = true;
        setTimeout(() => setIsSorting(false), 500);
      }
    };
    
    animate();
  };

  const applyColorUpdates = (step) => {
    if (step < 0 || step >= animations.length) return;
    
    const animation = animations[step];
    const newColors = [...barColors];
    
    const { type, indices } = animation;
    
    switch(type) {
      case 'compare':
       
        indices.forEach(index => {
          if (index >= 0 && index < newColors.length) {
            newColors[index] = colorKey.comparing;
          }
        });
        break;
      case 'pivot':
       
        if (indices[0] >= 0 && indices[0] < newColors.length) {
          newColors[indices[0]] = colorKey.pivot;
        }
        break;
      case 'sorted':
       
        indices.forEach(index => {
          if (index >= 0 && index < newColors.length) {
            newColors[index] = colorKey.sorted;
          }
        });
        break;
      case 'reset':
       
        indices.forEach(index => {
          if (index >= 0 && index < newColors.length && newColors[index] !== colorKey.sorted) {
            newColors[index] = colorKey.default;
          }
        });
        break;
      default:
        break;
    }
    
    setBarColors(newColors);
  };

  const getBarLabel = (value) => {
   
    if (array.length > 30) return null;
    return value;
  };

  return (
    <div className="visualizer-container" style={{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }}>
      <div className="array-container">
        {displayArray.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              width: `${barWidth}px`,
              backgroundColor: barColors[idx] || colorKey.default
            }}
            title={`Value: ${value}`}
          >
            {getBarLabel(value)}
          </div>
        ))}
      </div>
      
      {isSorting && (
        <div className="algorithm-info">
          <h3>
            {isPaused ? 'Paused: ' : 'Running: '}
            {sortingAlgorithm.charAt(0).toUpperCase() + sortingAlgorithm.slice(1)} Sort
            {animations.length > 0 && ` (Step ${animationStep}/${animations.length})`}
          </h3>
          <div className="animation-progress-container">
            <div 
              className="animation-progress-bar" 
              style={{width: `${(animationStep / Math.max(1, animations.length)) * 100}%`}}
            ></div>
          </div>
        </div>
      )}
      
      {!isSorting && sortingCompleted.current && (
        <div className="algorithm-info completed">
          <h3>Sorting Completed</h3>
        </div>
      )}
    </div>
  );
};

export default Visualizer;
import { swap } from '../utils/arrayHelpers';
import { createAnimation } from '../utils/animationHelpers';

export const selectionSort = (array) => {
  const animations = [];
  const n = array.length;
  
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    animations.push(createAnimation('pivot', [i]));
    
    for (let j = i + 1; j < n; j++) {
      animations.push(createAnimation('compare', [minIndex, j]));
      
      if (array[j] < array[minIndex]) {
        animations.push(createAnimation('reset', [minIndex]));
        minIndex = j;
        animations.push(createAnimation('pivot', [minIndex]));
      } else {
        animations.push(createAnimation('reset', [j]));
      }
    }
    
    if (minIndex !== i) {
      animations.push(createAnimation('swap', [i, minIndex]));
      swap(array, i, minIndex);
    }
    
    animations.push(createAnimation('sorted', [i]));
    
    if (minIndex !== i) {
      animations.push(createAnimation('reset', [minIndex]));
    }
  }
  
  animations.push(createAnimation('sorted', [n - 1]));
  
  return animations;
};
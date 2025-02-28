import { swap } from '../utils/arrayHelpers';
import { createAnimation } from '../utils/animationHelpers';

export const quickSort = (array) => {
  const animations = [];
  
  const quickSortHelper = (arr, low, high) => {
    if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSortHelper(arr, low, pivotIndex - 1);
      quickSortHelper(arr, pivotIndex + 1, high);
    } else if (low === high) {
      animations.push(createAnimation('sorted', [low]));
    }
  };
  
  const partition = (arr, low, high) => {
    const pivot = arr[high];
    animations.push(createAnimation('pivot', [high]));
    let i = low - 1;
    
    for (let j = low; j <= high - 1; j++) {
      animations.push(createAnimation('compare', [j, high]));
      if (arr[j] < pivot) {
        i++;
        animations.push(createAnimation('swap', [i, j]));
        swap(arr, i, j);
      }
      animations.push(createAnimation('reset', [j]));
    }
    
    animations.push(createAnimation('swap', [i + 1, high]));
    swap(arr, i + 1, high);
    animations.push(createAnimation('sorted', [i + 1]));
    animations.push(createAnimation('reset', [high]));
    return i + 1;
  };
  
  quickSortHelper(array, 0, array.length - 1);
  
  return animations;
};

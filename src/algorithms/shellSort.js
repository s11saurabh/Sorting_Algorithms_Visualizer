import { createAnimation } from '../utils/animationHelpers';

export const shellSort = (array) => {
  const animations = [];
  const n = array.length;
  
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = array[i];
      animations.push(createAnimation('pivot', [i]));
      
      let j;
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        animations.push(createAnimation('compare', [j, j - gap]));
        animations.push(createAnimation('update', [j], [array[j - gap]]));
        array[j] = array[j - gap];
        animations.push(createAnimation('reset', [j, j - gap]));
      }
      
      if (j !== i) {
        animations.push(createAnimation('update', [j], [temp]));
        array[j] = temp;
      }
      
      animations.push(createAnimation('reset', [i]));
    }
    
    if (gap === 1) {
      for (let i = 0; i < n; i++) {
        animations.push(createAnimation('sorted', [i]));
      }
    }
  }
  
  return animations;
};

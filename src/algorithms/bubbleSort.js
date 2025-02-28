import { swap } from '../utils/arrayHelpers';
import { createAnimation } from '../utils/animationHelpers';

export const bubbleSort = (array) => {
  const animations = [];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push(createAnimation('compare', [j, j + 1]));

      if (array[j] > array[j + 1]) {
        animations.push(createAnimation('swap', [j, j + 1]));
        swap(array, j, j + 1);
      }

      animations.push(createAnimation('reset', [j, j + 1]));
    }

    animations.push(createAnimation('sorted', [n - i - 1]));
  }

  animations.push(createAnimation('sorted', [0]));

  return animations;
};

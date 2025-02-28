import { createAnimation } from '../utils/animationHelpers';

export const insertionSort = (array) => {
  const animations = [];
  const n = array.length;

  animations.push(createAnimation('sorted', [0]));

  for (let i = 1; i < n; i++) {
    const key = array[i];
    let j = i - 1;

    animations.push(createAnimation('compare', [i, j]));

    while (j >= 0 && array[j] > key) {
      animations.push(createAnimation('update', [j + 1], [array[j]]));
      array[j + 1] = array[j];

      animations.push(createAnimation('reset', [j + 1, j]));

      j--;

      if (j >= 0) {
        animations.push(createAnimation('compare', [i, j]));
      }
    }

    animations.push(createAnimation('update', [j + 1], [key]));
    array[j + 1] = key;

    animations.push(createAnimation('sorted', [j + 1]));
  }

  return animations;
};

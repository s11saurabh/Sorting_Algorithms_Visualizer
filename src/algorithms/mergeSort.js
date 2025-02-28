import { createAnimation } from '../utils/animationHelpers';

export const mergeSort = (array) => {
  const animations = [];
  const auxiliaryArray = [...array];

  const mergeSortHelper = (mainArray, auxArray, startIdx, endIdx) => {
    if (startIdx === endIdx) return;

    const middleIdx = Math.floor((startIdx + endIdx) / 2);

    mergeSortHelper(auxArray, mainArray, startIdx, middleIdx);
    mergeSortHelper(auxArray, mainArray, middleIdx + 1, endIdx);

    merge(mainArray, auxArray, startIdx, middleIdx, endIdx);
  };

  const merge = (mainArray, auxArray, startIdx, middleIdx, endIdx) => {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
      animations.push(createAnimation('compare', [i, j]));

      if (auxArray[i] <= auxArray[j]) {
        animations.push(createAnimation('update', [k], [auxArray[i]]));
        mainArray[k++] = auxArray[i++];
      } else {
        animations.push(createAnimation('update', [k], [auxArray[j]]));
        mainArray[k++] = auxArray[j++];
      }

      animations.push(createAnimation('reset', [i - 1, j - 1]));
    }

    while (i <= middleIdx) {
      animations.push(createAnimation('update', [k], [auxArray[i]]));
      mainArray[k++] = auxArray[i++];
    }

    while (j <= endIdx) {
      animations.push(createAnimation('update', [k], [auxArray[j]]));
      mainArray[k++] = auxArray[j++];
    }

    for (let idx = startIdx; idx <= endIdx; idx++) {
      animations.push(createAnimation('sorted', [idx]));
    }
  };

  mergeSortHelper(array, auxiliaryArray, 0, array.length - 1);

  return animations;
};

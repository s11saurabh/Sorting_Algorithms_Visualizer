export const generateRandomArray = (size, min, max) => {
  return Array.from({ length: size }, () => 
    Math.floor(Math.random() * (max - min + 1) + min)
  );
};

export const swap = (array, i, j) => {
  if (i >= 0 && i < array.length && j >= 0 && j < array.length) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export const isSorted = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

export const copyArray = (array) => {
  return [...array];
};

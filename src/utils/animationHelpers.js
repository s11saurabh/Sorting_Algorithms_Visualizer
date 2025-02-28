export const createAnimation = (type, indices, values = []) => {
  return { type, indices, values };
};

export const performSort = (algorithm, setIsSorting) => {
  console.log(`Executing ${algorithm} sort`);
};

export const calculateDelay = (speed) => {
  return 1000 / (speed * 2);
};

export const createFinishedAnimation = (length) => {
  const indices = Array.from({ length }, (_, i) => i);
  return createAnimation('sorted', indices);
};

export const applyAnimationToArray = (animation, array) => {
  const newArray = [...array];
  
  if (!animation) return newArray;
  
  const { type, indices, values } = animation;
  
  switch (type) {
    case 'swap':
      const [i, j] = indices;
      if (i >= 0 && i < newArray.length && j >= 0 && j < newArray.length) {
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
      break;
    case 'update':
      const [idx] = indices;
      const [val] = values;
      if (idx >= 0 && idx < newArray.length) {
        newArray[idx] = val;
      }
      break;
    default:
      break;
  }
  
  return newArray;
};

export const getArrayStateAtStep = (animations, initialArray, targetStep) => {
  let array = [...initialArray];
  
  if (animations && animations.length > 0) {
    for (let i = 0; i <= targetStep && i < animations.length; i++) {
      array = applyAnimationToArray(animations[i], array);
    }
  }
  
  return array;
};
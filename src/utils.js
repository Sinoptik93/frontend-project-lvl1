// Function to generate game random integer.
const getRandom = (minVal, maxVal) => Math.floor(Math.random() * maxVal) + minVal;

// Function to get sample from array.
const sample = (array) => {
  const len = array == null ? 0 : array.length;
  return len ? array[Math.floor(Math.random() * len)] : undefined;
};

export {
  getRandom, sample,
};

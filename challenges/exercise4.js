export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const indexN = nums.indexOf(n);
  return indexN === -1 || indexN === nums.length - 1 ? null : nums[indexN + 1];
};



export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	let result = { 1: 0, 0: 0 };
	for (let index = 0; index < str.length; index++) {
	  const element = str[index];
	  result[element] = result[element] + 1;
	}
	return result;
  };


export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	return Number(n.toString().split("").reverse().join(""));
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	let result = 0;
	for (let index = 0; index < arrs.length; index++) {
	  const arr = arrs[index];
	  for (let indexOfArr = 0; indexOfArr < arr.length; indexOfArr++) {
		const number = arr[indexOfArr];
		result = result + number;
	  }
	}
	return result;};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error("arr is required");
	const arrLen = arr.length;
	if (arrLen > 1) [arr[0], arr[arrLen - 1]] = [arr[arrLen - 1], arr[0]];
	return arr;
  };
	


export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	let result = false;
	for (let key in haystack) {
	  if (
		haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
	  ) {
		result = true;
	  }
	}
	return result;
  };

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	let strAsArr = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ");
  const result = {};
  for (let index = 0; index < strAsArr.length; index++) {
    const word = strAsArr[index];
    if (result[word] === undefined) {
      result[word] = 1;
    } else {
      result[word] += 1;
    }
  }
  return result;};

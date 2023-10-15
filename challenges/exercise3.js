export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const result =[]
		for ( let i = 0; i< nums.length; i++){
			if (nums[i] < 1) result.push(nums[i])
		}
	return result;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const result = [];
	for (let i=0; i < names.length; i++){
		if (names[i].charAt(0) === char) result.push(names[i])
	}
return result;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	const result =[]
		for (let i=0; i<words.length; i++){
		let word =	words[i];
		let begins = word.slice(0, 3)
		if (begins ==='to ') result.push(word)
		}
	return result;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const result =[];
	for (let i = 0; i < nums.length; i++){
		if (nums[i] % 1 === 0 ) {
			result.push((nums[i]))
		}  
	}
	return result;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	const result = []
	for ( let i = 0; i < users.length; i++) {
		result.push(users[i].data.city.displayName)
	}
	return result;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.map((num) => Number(Math.sqrt(num).toFixed(2)));	
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	let result =[];
	for (let i = 0; i < sentences.length; i++) {
	
	  
		const words = sentences[i];
		words.toLowerCase()
		if (words.toLowerCase().includes(str)) {
			result.push(words)
		}

		
	}
	return result;

}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	let result = [];
	for ( let i =0; i < triangles.length; i++){
		let max = 0;
		for ( let j = 0; j < 3; j++) {
			if (triangles[i][j] > max) {
				max = triangles[i][j]
			}
		}
		result.push(max);		
	}
	return result;

}

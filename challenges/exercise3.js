export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	const result =[]
		nums.forEach(element => {
			if (element < 1) result.push(element)
		}); 
		return result;

		}


export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	const result = [];
	names.forEach(name => {
		if (name.charAt(0) === char) result.push(name)

	})
return result;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	const result =[]
	words.forEach(element => {
		let begins = element.slice(0, 3)
		if (begins ==='to ') result.push(element)
		});
		return result;

	};

		

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	const result =[];
	nums.forEach(element => {
		if (element % 1 === 0 ) {
			result.push((element))
}});
return result;

	}


export function getCities(users) {
	if (!users) throw new Error('users is required');
	const result = []
	users.forEach(element => {
		result.push(element.data.city.displayName)
	});
	
	return result;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	let result = []
	nums.forEach(element => {
		result.push(Number(Math.sqrt(element).toFixed(2)));
	});
	return result;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	let result =[];

	sentences.forEach(words => {
		words.toLowerCase()
		if (words.toLowerCase().includes(str)) {
			result.push(words)
		}
	});
	return result;

		
	}



export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	let result = [];
	triangles.forEach(element => {
		let max = 0;
		element.forEach(side => {
			if (side > max) {
				max = side
			}
		});
		result.push(max);		


	});
	return result;

	}



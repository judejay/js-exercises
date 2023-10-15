export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	let result =[];
	nums.forEach(element => {
		result.push(element * element)
	});
	return result;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	let result = words[0]
	for (let i=1; i < words.length; i++){
		let word = words[i];
		if (word) {
			let firstLetter =  word.charAt(0).toUpperCase()
			let transformedWord = firstLetter + word.slice(1)
			result += transformedWord;
		}
	}
	return result;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	let result = 0;
	people.forEach(person =>{
		person.subjects.forEach(subject =>{
			if(subject) {
				return result ++}
		});
	});

	return result;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	let result = false;
	menu.forEach(dish =>{
		dish.ingredients.forEach(food =>{
			if (ingredient === food) result = true
		})
	})
	return result;

}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	let result = [];
	arr1.forEach( number =>{
		if (arr2.includes(number)) {
			result.push(number);
		}
	})
	return result;
}

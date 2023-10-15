export function getFillings(sandwich) {
  const result = [];
  if (sandwich === undefined) throw new Error("ingredients is required");
  sandwich.fillings.forEach((element) => {
    result.push(element);
  });
  return result;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let result = 0;
  arr.forEach((animal) => {
    if (animal === "sheep") result++;
  });
  return result;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return person.address.city.charAt(0) === "M";
}

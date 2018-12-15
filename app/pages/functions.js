// const moveZeros = (arr) => {
// 	let zeros = [];
// 	const result = arr.filter((el) => {
// 		if (el !== 0) {
// 			return el;
// 		// } else {
// 		// 	zeros.push(el)
// 		// } 
// 	}
	
// 	// return result.concat(zeros);

// });

// moveZeros([0, 1, 23, false, 'test', 0, 6]);


// const iqTest = (str) => {
// 	const arrFromStr = str.split(' ');
// 	const odds = [];
// 	const evens = []; 
// 	arrFromStr.filter((el) => {
// 		if (el % 2 === 0) {
// 			evens.push(el);
// 		} else {
// 			odds.push(el);
// 		}

// 	});

// 		if (odds.length > evens.length) {
// 			return arrFromStr.indexOf(evens[0]) + 1;
// 		} else {
// 			return arrFromStr.indexOf(odds[0]) + 1;
// 		}
// }


// for (i = 45; i < 67; i++) {
// 	i % 10 === 0 ? console.log(i) : undefined;
// } 


// // iqTest('2 4 7 8 10');


// function person(name, surname) {
// 	console.log(`Hello, ${name} ${surname}!`);
// }

// person('John', 'Doe')


// const addThree = (num) => {
// 	const number = 0;

// 	return +number + 3;
// }

const add = (a, b) => {
return a + b
}
add(20, 50)


const length = (r) => {
	return 3.14 * 2 * r
}

length(10)

const discr = (a, b, c) => {
	return b * b - 4 * a *c
}

discr(2, 5, -7)

const square = (num) => {
	return num * num
}

square(2)
square(10)

const sumTo = (num) => {
	if (num === 1) return 1;
	return num + sumTo(num - 1);
}

sumTo(10);
sumTo(100);


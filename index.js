// Дана строка со словами. Отсортируйте слова в алфавитном порядке.
// const stringSort = str => {
// 	let strArr = str.split(' ')
// 	for (let i = 0; i < strArr.length; i++) {
// 		let newI = i
// 		for (let j = i + 1; j < strArr.length; j++) {
// 			if (strArr[j] < strArr[newI]) {
// 				newI = j
// 			}
// 		}
// 		let temp = strArr[i]
// 		strArr[i] = strArr[newI]
// 		strArr[newI] = temp
// 	}
// 	let sortedString = strArr.join(' ')
// 	return sortedString
// }

// let str = 'g f d b c a '
// console.log(stringSort(str))

// Дано число. Получите массив делителей этого числа.
// const numberArr = number => {
// 	let divisors = []
// 	for (let i = 1; i <= number; i++) {
// 		if (number % i === 0) {
// 			divisors.push(i)
// 		}
// 	}
// 	return divisors
// }
// let number = 12345
// console.log(numberArr(number))

// Даны два числа. Получите массив общих делителей этих чисел.

// const commonDivisors = (num1, num2) => {
// 	let divisors = []
// 	let minNum = num1 < num2 ? num1 : num2
// 	for (let i = 1; i <= minNum; i++) {
// 		if (num1 % i === 0 && num2 % i === 0) {
// 			divisors.push(i)
// 		}
// 	}
// 	return divisors
// }
// let num1 = 12345
// let num2 = 12345
// console.log(commonDivisors(num1, num2))

// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

// const number = num => {
// 	if (num <= 1) {
// 		return false
// 	}
// 	for (let i = 2; i * i <= num; i++) {
// 		if (num % i === 0) {
// 			return false
// 		}
// 	}
// 	return true
// }
// let num = -12345
// console.log(number(num))

// Через запятую написаны числа. Получите максимальное из этих чисел.
// const number = numString => {
// 	let numbers = numString.split(',')
// 	let max = parseInt(numbers[0])

// 	for (let i = 1; i < numbers.length; i++) {
// 		let currentNumber = parseInt(numbers[i])
// 		if (currentNumber > max) {
// 			max = currentNumber
// 		}
// 	}
// 	return max
// }

// let numString = '12, 345, 67, 890'
// console.log(number(numString))

// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.
// const arrayChill = num => {
// 	let newArray = []
// 	for (let i = 0; i < num.length; i++) {
// 		if (num[i] < 10) {
// 			newArray.push(num[i])
// 			newArray.push(num[i])
// 		} else {
// 			newArray.push(num[i])
// 		}
// 	}
// 	return newArray
// }
// let array = [12, 34, 56, 78, 9, 1, 7, 0]
// console.log(arrayChill(array))

// Дана строка. Удалите из нее все гласные буквы.
// const string = str => {
// 	let result = ''
// 	for (let i = 0; i < str.length; i++) {
// 		let char = str[i].toLowerCase()
// 		if (
// 			char !== 'a' &&
// 			char !== 'e' &&
// 			char !== 'i' &&
// 			char !== 'o' &&
// 			char !== 'u'
// 		) {
// 			result += str[i]
// 		}
// 	}
// 	return result
// }
// let str = 'abcdfgeiou'
// console.log(string(str))
//
// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

const string = str => {
	return str
}
let str = 'xabib kamron bib momo'
console.log(string(str))

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

// const string = str => {
// 	let words = str.split(' ')
// 	for (let i = 0; i < words.length; i++) {
// 		let word = words[i]
// 		words[i] = word.slice(0, -1) + word.slice(-1).toUpperCase()
// 	}
// 	return words.join(' ')
// }
// let str = 'xabib kamron bib momo'
// console.log(string(str))

// Дан следующая структура:
// Найдите сумму элементов этой структуры.
// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ];

// const dataObj = data => {
// 	let sum = 0
// 	for (let i = 0; i < data.length; i++) {
// 		for (let key in data[i]) {
// 			let result = data[i][key]
// 			for (let j = 0; j < result.length; j++) {
// 				sum += result[j]
// 			}
// 		}
// 	}
// 	return sum
// }
// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// ]

// console.log(dataObj(data))

// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

// const array = arr => {
// 	for (let i = 0; i < arr.length; i++) {
// 		let numStr = arr[i].toString()
// 		if (numStr.includes('3')) {
// 			return true
// 		}
// 	}
// 	return false
// }

// let arr = [123, 124]

// console.log('>>>', array(arr))

// Дана строка в формате:
// 'kebab-case'
// Преобразуйте ее в формат:
// 'snake_case'

// const string = str => {
// 	let snakeAdd = 'snake_'
// 	let starArr = str.split('-')
// 	return snakeAdd + starArr[1]
// }
// let str = 'kebab-case'
// console.log(string(str))

// Дана строка в формате:

// 'snake_case'
// Преобразуйте ее в формат:

// 'camelCase'

// const stringCamelCase = str => {
// 	let camelCase = str.split('_')
// 	let result = camelCase[0]
// 	for (let i = 1; i < camelCase.length; i++) {
// 		result += camelCase[i].charAt(0).toUpperCase() + camelCase[i].slice(1)
// 	}
// 	console.log('>>>', result)
// }
// let str = 'snake_case'
// console.log(stringCamelCase(str))

//Задание 1
//Создайте функцию makeOne которая записывает в Local Storage ключ games со значением 11. Вызывается функция по кнопке Задание 1.

function makeOne() {
	//Ваш код
	localStorage.setItem("game", 11);
}

//добавьте слушатель события
document.querySelector('.b-1').onclick = makeOne;

//Задание 2
//Создайте функцию makeTwo, которая сохраняет в Local Storage строку "7,6,5". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 2.

function makeTwo() {
	//Ваш код
	localStorage.setItem("numbers", "7,6,5");
	console.log('Строка "7,6,5" была записана в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-2').onclick = makeTwo;

//Задание 3
//Создайте функцию makeThree, которая сохраняет в Local Storage строку "name=John, age=25". Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 3.

function makeThree() {
	//Ваш код
	localStorage.setItem("userInfo", "name=John, age=25");
	console.log('Строка "name=John, age=25" была записана в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-3').onclick = makeThree;

//Задание 4
//Создайте функцию makeFour, которая сохраняет в Local Storage логическое значение true. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 4.

function makeFour() {
	//Ваш код
	localStorage.setItem("true", true);
	console.log('Логическое значение true было записано в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-4').onclick = makeFour;

//Задание 5
//Создайте функцию makeFive, которая сохраняет в Local Storage значение null. Ключ задайте самостоятельно. Вызывается функция по кнопке Задание 5.

function makeFive() {
	//Ваш код
	localStorage.setItem("null", null);
	console.log('Значение null было записано в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-5').onclick = makeFive;
//Задание 6
//Создайте функцию makeSix, которая сохраняет в Local Storage по ключу objectSix объект obj = { name: "Алиса", age: 30 }. Вызывается функция по кнопке Задание 6.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSix() {
	//Ваш код
	localStorage.setItem("objectSix", JSON.stringify(obj = { name: "Алиса", age: 30 }));
	console.log('Объект obj был записан в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-6').onclick = makeSix;
//Задание 7
//Создайте функцию makeSeven, которая сохраняет в Local Storage по ключу objectSeven объект obj = {
//   city: "Лондон",
//   country: "Великобритания",
//   population: 8900000,
//   language: "английский"
// }. Вызывается функция по кнопке Задание 7.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeSeven() {
	//Ваш код
	localStorage.setItem("objectSeven", JSON.stringify(obj = {
		city: "Лондон",
		country: "Великобритания",
		population: 8900000,
		language: "английский"
		})
	);
	console.log('Объект obj был записан в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-7').onclick = makeSeven;
//Задание 8
//Создайте функцию makeEight, которая сохраняет в Local Storage по ключу objectEight объект obj = {
//   fruit: "Яблоко",
//   color: "красное",
//   quantity: 10,
//   price: 199
// }. Вызывается функция по кнопке Задание 8.
//Подсказка: Для преобразования объекта в строку используйте метод JSON.stringify()

function makeEight() {
	//Ваш код
	localStorage.setItem("objectEight", JSON.stringify(obj = {
		fruit: "Яблоко",
        color: "красное",
        quantity: 10,
        price: 199
		})
	);
	console.log('Объект obj был записан в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-8').onclick = makeEight;
//Задание 9
//Создайте функцию makeNine, которая сохраняет в Local Storage по ключу arrayNine массив arr = [1, 2, 3, 4, 5]. Вызывается функция по кнопке Задание 9.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeNine() {
	//Ваш код
	localStorage.setItem("arrayNine", JSON.stringify(arr = [1, 2, 3, 4, 5])
	);
	console.log('Массив arr был записан в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-9').onclick = makeNine;
//Задание 10
//Создайте функцию makeTen, которая сохраняет в Local Storage по ключу arrayTen массив arr = ["яблоко", "банан", "апельсин"]. Вызывается функция по кнопке Задание 10.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeTen() {
	//Ваш код
	localStorage.setItem("arrayTen", JSON.stringify(arr = ["яблоко", "банан", "апельсин"])
	);
	console.log('Массив arr был записан в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-10').onclick = makeTen;
//Задание 11
//Создайте функцию makeEleven, которая сохраняет в Local Storage по ключу arrayEleven массив arr = [
// { name: "Алиса", age: 30 },
// { name: "Филин", age: 35 },
// { name: "Кот", age: 40 }
// ]. Вызывается функция по кнопке Задание 11.
//Подсказка: Для преобразования массива в строку используйте метод JSON.stringify()

function makeEleven() {
	//Ваш код
	localStorage.setItem("arrayEleven", JSON.stringify(arr = [
		{ name: "Алиса", age: 30 },
		{ name: "Филин", age: 35 },
		{ name: "Кот", age: 40 }
		])
	);
	console.log('Массив arr был записан в Local Storage.');
}

//добавьте слушатель события
document.querySelector('.b-11').onclick = makeEleven;
//Задание 12
//Создайте функцию showEleven, которая при нажатии кнопки Задание 12 получит из Local Storage сохраннённый массив arrayEleven. Выведите в practicum12 в формате ключ пробел значение. Вызывается функция по кнопке Задание 12.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse()

function showEleven() {
	//Ваш код
	const arrayEleven = JSON.parse(localStorage.getItem("arrayEleven"));
	console.log(arrayEleven);
	let output = '';
	for (let i = 0; i < arrayEleven.length; i++) {
		const object = arrayEleven[i];
		for (let key in object) {
			output += `${key}: ${object[key]} `;
		}
	}
	document.querySelector('.practicum12').textContent = output;
}

//добавьте слушатель события
document.querySelector('.b-12').onclick = showEleven;
//Задание 13
//Создайте функцию showTen, которая при нажатии кнопки Задание 13 получит из Local Storage сохраннённый массив arrayTen. Выведите в элемент с классом practicum13 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 13.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.
const showTen = () => {
	const arrayTen = JSON.parse(localStorage.getItem('arrayTen'));
	if (arrayTen !== null) {
		//Ваш код
		const resultElement = document.querySelector('.practicum13');
		for (const key in arrayTen) {
			const value = arrayTen[key];
			resultElement.innerHTML += `${key}: ${value}<br>`;
		}
	} else {
		console.log('Массив arrayTen не найден в Local Storage.');
	}
};

//добавьте слушатель события
document.querySelector('.b-13').onclick = showTen;
//Задание 14
//Создайте функцию showNine, которая при нажатии кнопки Задание 14 получит из Local Storage сохраннённый массив arrayNine. Выведите в элемент с классом practicum14 в формате ключ пробел значение перенос строки. Вызывается функция по кнопке Задание 14.
//Подсказка: Для преобразования строки в объект используйте метод JSON.parse(). Для работы с массивом используйте циклы.

const showNine = () => {
	const arrayNine = JSON.parse(localStorage.getItem('arrayNine'));
	if (arrayNine !== null) {
		//Ваш код
		const resultElement = document.querySelector('.practicum14');
		for (const key in arrayNine) {
			const value = arrayNine[key];
			resultElement.innerHTML += `${key}: ${value}<br>`;
		}
	} else {
		console.log('Массив arrayNine не найден в Local Storage.');
	}
};

document.querySelector('.b-14').addEventListener('click', showNine);

//Задание 15
//Создайте функцию showEight, которая при нажатии кнопки Задание 15 получит из Local Storage сохраннённый объект objectEight. Выведите в элемент с классом practicum15 в формате значение точка с запятой. Вызывается функция по кнопке Задание 15.

const showEight = () => {
	//Ваш код
	const objectEight = JSON.parse(localStorage.getItem("objectEight"));
	console.log(objectEight);
	const resultElement = document.querySelector('.practicum15');
	for (const key in objectEight) {
		const value = objectEight[key];
		resultElement.innerHTML += `${value}; `;
	}
};

document.querySelector('.b-15').addEventListener('click', showEight);

//Задание 16
//Создайте функцию showSeven, которая при нажатии кнопки Задание 16 получит из Local Storage сохраннённый объект objectSeven. Выведите в элемент с классом practicum16 строку: "В Лондоне живёт 8900000 человек", вместо названия города и числа жителей, используйте значения по ключу city и population соответственно. Вызывается функция по кнопке Задание 16.

const showSeven = () => {
	//Ваш код
	const objectSeven = JSON.parse(localStorage.getItem("objectSeven"));
	document.querySelector('.practicum16').textContent = `В ${objectSeven.city} живёт ${objectSeven.population} человек`;
};

document.querySelector('.b-16').addEventListener('click', showSeven);

//Задание 17
//Создайте функцию showSix, которая при нажатии кнопки Задание 17 получит из Local Storage сохраннённый объект objectSix. Выведите в элемент с классом practicum17 строку: "Привет! Я Алиса. Мне 30 лет.", вместо имени и возраста, используйте значения по ключу name и age соответственно. Вызывается функция по кнопке Задание 17.

const showSix = () => {
	//Ваш код
	const objectSix = JSON.parse(localStorage.getItem("objectSix"));
	document.querySelector('.practicum17').textContent = `Привет! Я ${objectSix.name}. Мне ${objectSix.age} лет.`;
};

document.querySelector('.b-17').addEventListener('click', showSix);

//Задание 18
//Создайте функцию clearLocalStorage, которая очищает весь Local Storage. Вызывается функция по кнопке Задание 18.

const clearLocalStorage = () => {
	//Ваш код
	localStorage.clear();
	console.log('Local Storage очищен.');
};

//добавьте слушатель события
document.querySelector('.b-18').addEventListener('click', clearLocalStorage);
//Задание 19
//Cоздана форма с одним поле ввода, в которое пользователь может вводить только числа. Создайте массив numbers. Когда пользователь нажимает кнопке Задание 19 число должно добавляться в массив. Массив должен сохраняться в Local Storage с ключем task19. Вызывается функция по кнопке Задание 19. Что произойдёт, если нажать на кнопке трижды?

let numbers = [];

const addToNumbers = () => {
	const numberInput = document.getElementById('numberInput');
	const number = parseInt(numberInput.value);

	//Ваш код
	numbers.push(number);
	localStorage.setItem("task19", JSON.stringify(numbers)
	);
};

//Что произойдёт, если нажать на кнопке трижды? - Число будет добавлено в массив трижды numbers = [number, number, number];

document.querySelector('.b-19').addEventListener('click', addToNumbers);

//Задание 20
//Создайте функцию removeLastElement, которая при вызове удаляет из массива numbers последний элемент. После чего массив сохраняется в Local Storage с ключем task19 (используйте массив из задания 19). Вызывается функция по кнопке Задание 20.

const removeLastElement = () => {
	if (numbers.length > 0) {
		//Ваш код
		// localStorage.removeItem("task19", JSON.stringify(numbers));
		numbers.splice(numbers.length-1);
		localStorage.setItem("task20", JSON.stringify(numbers));
		console.log('Последний элемент удален из массива numbers и сохранен в Local Storage.');
	} else {
		console.log('Массив numbers пуст.');
	}
};

//добавьте слушатель события
document.querySelector('.b-20').addEventListener('click', removeLastElement);
//Задание 21
//Создайте функцию addToCart, которая при нажатии кнопки Задание 21 получает из Local Storage сохранённый массив cartItems. 
//Затем добавляет новый элемент в массив, представляющий товар, введённый вами в поле ввода. 
//Массив cartItems должен сохраняться в Local Storage с ключом task21. Вызывается функция по кнопке Задание 21.
//Подсказка: необходимо проверить существует ли значение и не является пустым. Если значение в хранилище есть, то оно преобразуется из JSON в массив. 
//В противном случае, устанавливается пустой массив.


const addToCart = () => {
	const productInput = document.getElementById('productInput');
	const product = productInput.value;

	if (product.trim() !== '') {
		let cartItems = localStorage.getItem('task21');
		cartItems = cartItems ? JSON.parse(cartItems) : [];

		cartItems.push(product);

		localStorage.setItem('task21', JSON.stringify(cartItems));

		console.log(`Товар "${product}" добавлен в корзину и сохранен в Local Storage.`);
	} else {
		console.log('Введите название товара.');
	}
	};

document.querySelector('.b-21').addEventListener('click', addToCart);

//Задание 22
//Создайте функцию removeFromCart, которая при нажатии кнопки Задание 22 получает из Local Storage сохранённый массив cartItems. Затем удаляет последний элемент из массива. Массив cartItems должен сохраняться в Local Storage с ключом cartItems. Вызывается функция по кнопке Задание 22.
//Подсказка: необходимо проверить, существует ли значение и не является ли оно пустым. Это может вызвать ошибку, если cartItems не существует в Local Storage или является пустым.

const removeFromCart = () => {

		let cartItems = localStorage.getItem('task21');
		cartItems = JSON.parse(cartItems)
		if (cartItems && cartItems.length > 0) {
			let product = cartItems.pop();
			localStorage.setItem('task21', JSON.stringify(cartItems));
			console.log(`Товар "${product}" удален из корзины и Local Storage.`);
		} else {console.log("Корзина пуста")}
	
}

document.querySelector('.b-22').addEventListener('click', removeFromCart);

//Задание 23
//Создайте функцию showCart, которая при нажатии кнопки Задание 23 получает из Local Storage сохранённый массив cartItems. 
//Выведите элементы массива в элемент с классом practicum23. Вызывается функция по кнопке Задание 23.
const practicum23 = document.querySelector(".practicum23");
const showCart = () => {
	let cartItems = localStorage.getItem('task21');
	cartItems = JSON.parse(cartItems)
	practicum23.textContent = cartItems;
};

document.querySelector('.b-23').addEventListener('click', showCart);

//Задание 24
//Создайте функцию updateCartCount, которая при нажатии кнопки Задание 24 обновляет количество товаров в корзине. Получите из Local Storage сохранённый массив cartItems и выведите количество товаров в элемент с классом practicum24 (например: "Количество товаров в корзине 3"). Вызывается функция по кнопке Задание 24.
const practicum24 = document.querySelector(".practicum24");
const updateCartCount = () => {
	let cartItems = localStorage.getItem('task21');
	cartItems = JSON.parse(cartItems)
	if (cartItems && cartItems.length > 0) {
		practicum24.textContent = `Товаров в корзине ${cartItems.length}`;
	} else {practicum24.textContent = "Корзина пуста"}
};

document.querySelector('.b-24').addEventListener('click', updateCartCount);

//Задание 25
//Создайте функцию clearCart, которая при нажатии кнопки Задание 25 очищает весь массив cartItems в Local Storage. Вызывается функция по кнопке Задание 25.

const clearCart = () => {
	let cartItems = localStorage.getItem('task21');
	cartItems = JSON.parse(cartItems);
	cartItems =[];
	localStorage.setItem('task21', JSON.stringify(cartItems));
	console.log('Корзина очищена.');
};

document.querySelector('.b-25').addEventListener('click', clearCart);

//Задание 26
//При загрузке страницы установите cookie с именем "username" и значением "Кот Учёный". Выведите сообщение в консоль, подтверждающее успешное создание cookie.

//Ваш код
document.cookie = 'username=Кот Учёный';
console.log("Cookie 'username' установлен.");

//Задание 27
//Допишите функцию getCookie, которая принимает имя cookie. Функция должна получать значение cookie с указанным именем, возвращать его и записывать в элемент с классом practicum27. Если cookie с указанным именем не найден, функция должна возвращать пустую строку. Вызывается функция по кнопке Задание 27. Выведите куку с именем "username".
let username = "";

const getCookie = (name) => {
	const cookieContainer = document.querySelector('.practicum27');
	const cookies = document.cookie.split('; ');
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].split('=');
		if (cookie[0] === name) {
			username = cookie[1] || '';
			//Ваш код
	cookieContainer.textContent = username;
		} 
	}

};

document.querySelector('.b-27').addEventListener('click', () => {
	getCookie('username');
});

//Задание 28
//Создайте функцию checkCookie, которая будет проверять, существует ли cookie с именем "username". Если cookie существует, выведите его значение в консоль. В противном случае выведите сообщение "Cookie с именем 'username' не найден." Вызывается функция по кнопке Задание 28.
//Подсказка: используйте функцию getCookie

const checkCookie = () => {
	//Ваш код
	getCookie('username');
	if (username !== '') {
		console.log(username);
	} else {
		console.log("Cookie с именем 'username' не найден.");
	}
};

// добавьте слушатель события
document.querySelector('.b-28').addEventListener('click', checkCookie);

//Задание 29
//Создайте функцию setCookie, которая принимает имя и значение cookie. Функция должна устанавливать cookie с указанным именем и значением. После установки cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 29.

const setCookie = (name, value) => {
	document.cookie = `${name}=${value}`;
	//Ваш код
	console.log(`Cookie с именем ${name} и значением ${value} установлен.`);
};

document.querySelector('.b-29').addEventListener('click', () => {
	setCookie('testCookie', 'Hello');
});

//Задание 30
//Создайте функцию deleteCookie, которая принимает имя cookie. Функция должна удалять cookie с указанным именем. После удаления cookie, выведите сообщение в консоль. Вызывается функция по кнопке Задание 30.

const deleteCookie = (name) => {
	document.cookie = `${name}=; max-age=-1;`;

	//Ваш код
	console.log(`Cookie с именем ${name} удален.`);
};

document.querySelector('.b-30').addEventListener('click', () => {
	deleteCookie('testCookie');
});

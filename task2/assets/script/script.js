const taskList = document.getElementById('taskList');
const textOfNewElement = document.getElementById('inputBox');
const newElement = document.createElement("li");
const noTasks = document.querySelector(".noTasks");
const clear = document.querySelector('.clear');

let jsonTaskList = localStorage.getItem('taskList');
jsonTaskList = JSON.parse(jsonTaskList);

if (jsonTaskList && jsonTaskList.length > 0) {
//если задачи есть в локальной памяти, то они создаются после обновления страницы
	jsonTaskList.forEach(element => {
		noTasks.style.display = "none";
		taskList.innerHTML += `
			<li class="taskList__item">${element}</li>`
		}
	);
	//кнопка очистить разблокирована
	clear.disabled = false;
} else {
	noTasks.style.display = "inherit";
	clear.disabled = true;
};


function createTask() {
	if (textOfNewElement.value.trim() !== '') {
		const createNoTasks = document.querySelector(".noTasks");
		createNoTasks.style.display = "none";
		//берем значение из инпута и создаем задачу
		newElement.textContent = textOfNewElement.value;
		taskList.innerHTML += `
		<li class="taskList__item">${textOfNewElement.value}</li>`
		//сохраняем задачу в локальную память
		let jsonTaskListLocal = localStorage.getItem('taskList');
		jsonTaskListLocal = jsonTaskListLocal ? JSON.parse(jsonTaskListLocal) : [];
		jsonTaskListLocal.push(textOfNewElement.value);
		localStorage.setItem('taskList', JSON.stringify(jsonTaskListLocal));
		console.log(`The task "${textOfNewElement.value}" added to to do list and saved in the Local Storage.`);
		//очищаем поле ввода
		textOfNewElement.value = '';
		//кнопка очистить разблокирована
		clear.disabled = false;
	} else {
		alert('Add a task');
	}
};

document.querySelector('.add').onclick = createTask;


taskList.addEventListener('click', function(evt) {
	// Код, который будет выполнен при клике на элемент <li>
	if (evt.target.tagName === 'LI') {
	// переключение класса
	evt.target.classList.toggle('completed');
	}
});

const clearList = () => {
	let jsonTaskList = localStorage.getItem('taskList');
	jsonTaskList = JSON.parse(jsonTaskList);
	//очищаем список задач и локальную память
	jsonTaskList =[];
	localStorage.setItem('taskList', JSON.stringify(jsonTaskList));
	//добавляем надпись, что задачи отсутствуют
	taskList.innerHTML = `<p class="noTasks">There are no tasks</p>`;
	console.log('The To do list is cleared');
	//кнопка очистить заблокирована
	clear.disabled = true;
};

document.querySelector('.clear').addEventListener('click', clearList);

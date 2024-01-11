const taskList = document.getElementById('taskList');
const textOfNewElement = document.getElementById('inputBox');
const newElement = document.createElement("li");

function createTask() {
	if (textOfNewElement.value.trim() !== '') {
	const noTasks = document.querySelector(".noTasks");
	noTasks.style.display = "none";
	newElement.textContent = textOfNewElement.value;
	taskList.innerHTML += `
	<li class="taskList__item">${textOfNewElement.value}</li>`

let jsonTaskList = localStorage.getItem('taskList');
	jsonTaskList = jsonTaskList ? JSON.parse(jsonTaskList) : [];

	jsonTaskList.push(textOfNewElement.value);

	localStorage.setItem('taskList', JSON.stringify(jsonTaskList));

	console.log(`The task "${textOfNewElement.value}" added to todo-list and saved in the Local Storage.`);

	textOfNewElement.value = '';
} else {
	alert('Add a task');
}
}

document.querySelector('.add').onclick = createTask;


taskList.addEventListener('click', function(evt) {
	if (evt.target.tagName === 'LI') {
	// Код, который будет выполнен при клике на элемент <li>
	evt.target.classList.toggle('completed'); // переключение класса
}
});

const clearList = () => {
	let jsonTaskList = localStorage.getItem('taskList');
	jsonTaskList = JSON.parse(jsonTaskList);
	jsonTaskList =[];
	localStorage.setItem('taskList', JSON.stringify(jsonTaskList));
	taskList.innerHTML = `<p class="noTasks">There are no tasks</p>`;
	console.log('The To do list is cleared');

};

document.querySelector('.clear').addEventListener('click', clearList);

const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

function createTask(text) {
    const task = document.createElement('div');
    task.className = 'task';

    const title = document.createElement('div');
    title.className = 'task__title';
    title.textContent = text;

    const removeBtn = document.createElement('a');
    removeBtn.className = 'task__remove';
    removeBtn.innerHTML = '&times;';
    removeBtn.href = '#';

    removeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        task.remove();
    });

    task.appendChild(title);
    task.appendChild(removeBtn);

    return task;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const value = input.value.trim();

    if (value) {
        const newTask = createTask(value);
        tasksList.appendChild(newTask);
        input.value = '';
    }
});
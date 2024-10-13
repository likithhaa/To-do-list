document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const taskText = taskInput.value;
    const taskTime = taskDateTime.value;

    if (taskText && taskTime) {
        addTask(taskText, taskTime);
        taskInput.value = '';
        taskDateTime.value = '';
    }
});

function addTask(taskText, taskTime) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskText} (Due: ${taskTime}) 
        <button class="complete-btn">Complete</button> 
        <button class="delete-btn">Delete</button>
    `;

    document.getElementById('pendingTasks').appendChild(taskItem);

    taskItem.querySelector('.complete-btn').addEventListener('click', function() {
        taskItem.classList.add('completed');
        taskItem.querySelector('.complete-btn').remove();
        document.getElementById('completedTasks').appendChild(taskItem);
    });

    taskItem.querySelector('.delete-btn').addEventListener('click', function() {
        taskItem.remove();
    });
}

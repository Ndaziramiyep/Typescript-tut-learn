var ToDoList = /** @class */ (function () {
    function ToDoList() {
        var _this = this;
        this.tasks = [];
        this.taskInput = document.getElementById('taskInput');
        this.addTaskButton = document.getElementById('addTaskButton');
        this.taskList = document.getElementById('taskList');
        this.addTaskButton.addEventListener('click', function () { return _this.addTask(); });
        this.renderTasks();
    }
    ToDoList.prototype.addTask = function () {
        var taskText = this.taskInput.value.trim();
        if (taskText === '')
            return;
        var newTask = {
            id: Date.now(),
            text: taskText
        };
        this.tasks.push(newTask);
        this.taskInput.value = '';
        this.renderTasks();
    };
    ToDoList.prototype.removeTask = function (taskId) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== taskId; });
        this.renderTasks();
    };
    ToDoList.prototype.renderTasks = function () {
        var _this = this;
        this.taskList.innerHTML = '';
        this.tasks.forEach(function (task) {
            var taskItem = document.createElement('li');
            taskItem.textContent = task.text;
            var removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function () { return _this.removeTask(task.id); });
            taskItem.appendChild(removeButton);
            _this.taskList.appendChild(taskItem);
        });
    };
    return ToDoList;
}());
document.addEventListener('DOMContentLoaded', function () {
    new ToDoList();
});

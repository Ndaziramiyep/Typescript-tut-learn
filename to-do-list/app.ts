interface Task {
    id: number;
    text: string;
}

class ToDoList {
    private tasks: Task[] = [];
    private taskInput: HTMLInputElement;
    private addTaskButton: HTMLButtonElement;
    private taskList: HTMLUListElement;

    constructor() {
        this.taskInput = <HTMLInputElement>document.getElementById('taskInput');
        this.addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
        this.taskList = document.getElementById('taskList') as HTMLUListElement;

        this.addTaskButton.addEventListener('click', () => this.addTask());
        this.renderTasks();
    }

    private addTask(): void {
        const taskText = this.taskInput.value.trim();
        if (taskText === '') return;

        const newTask: Task = {
            id: Date.now(),
            text: taskText
        };

        this.tasks.push(newTask);
        console.log(this.tasks)
        this.taskInput.value = '';
        this.renderTasks();
    }

    private removeTask(taskId: number): void {
        this.tasks = this.tasks.splice(taskId,1);
        this.renderTasks();
    }

    private renderTasks(): void {
        this.taskList.innerHTML = '';
        this.tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = task.text;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => this.removeTask(task.id));

            taskItem.appendChild(removeButton);
            this.taskList.appendChild(taskItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ToDoList();
});

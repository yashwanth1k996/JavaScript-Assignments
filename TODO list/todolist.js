let taskList = []


class Task {
    constructor(name, isDone) {
        this.taskId = Date.now();
        this.name = name;
        // this.dueDate = dueDate;
        this.isDone = isDone;
    }
    toString() {
        let text = "<li class='task'>";
        text += this.name;
        // text += this.dueDate;
        text += "<input type='checkbox' name='isDone' id='isDone'>"
        text += '<button onclick="deleteTask(';
        text += this.taskId
        text += ')">DELETE</button>'
        text += "</li>"

        return text
    }
}

function render() {
    const lisgtOl = document.getElementById("todolist");
    lisgtOl.innerHTML = "";
    taskList.forEach((task) => {
        lisgtOl.innerHTML += task.toString()
    })
}

function deleteTask(tid) {
    taskList = taskList.filter((t) => {
        if (t.taskId != tid) {
            return t
        }
    });
    render()
}

function createTask() {
    const val = document.getElementById('taskName').value;
    document.getElementById('taskName').value = "";
    const t = new Task(val, false);
    addTask(t);

}

function addTask(task) {
    taskList.push(task)
    render()
}
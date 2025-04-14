let todoList = [];

        function addTask() {
            const taskInput = document.getElementById("taskInput");
            const task = taskInput.value.trim();
            if (task) {
                todoList.push(task);
                taskInput.value = "";
                displayTasks();
            }
        }

        function displayTasks() {
            const list = document.getElementById("todoList");
            list.innerHTML = "";
            todoList.forEach((task, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = task;
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.onclick = () => removeTask(index);
                listItem.appendChild(removeButton);
                list.appendChild(listItem);
            });
        }

        function removeTask(index) {
            todoList.splice(index, 1);
            displayTasks();
        }
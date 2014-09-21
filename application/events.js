'use strict'

function onClickAddTask()
{
    // This function toggle the form (which is hidden by default)
    $("#todolist_form").slideToggle(200);
}


function onClickSaveTask(evt)
{
    // This function will save and add the task to the Todolist
    // I dont want that the Submit send the action to the server, so I disabled the default behavior with evt.preventDefault
    evt.preventDefault();
    //Now, i want to keep the user input. I store this information in a variable task.
    // I call the function createNewTask who is defined in the core of the app : todolist.js .
    var task = createNewTask(
        $('#task_content').val()
    );
    // Now, we have to call the function loadToDoList to load the todolist!
    var toDoList = loadToDoList();

    if (toDoList == null) {
        toDoList = [];
    }

    // Add the new task to the liste
    toDoList.push(task);

    //Then we call saveToDoList (defined in todolist.js) to save the updating list.
    saveToDoList(toDoList);
    updateDisplay();
}


function onClickDeleteTasks()
{
    var toDoList = [];
    saveToDoList(toDoList);
    updateDisplay();
}

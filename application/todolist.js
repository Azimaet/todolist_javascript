'use strict'
// We define a constant where we'll save the todolist
var EMPLACEMENT_STORAGE = "toDoList";

function createNewTask(content)
{
    // We create a new Object who will create the Task with the argument define in my event.js
    var task = {
        "task_content": content
    };
    return task;
    console.log("nouvelle tache");
}


function saveToDoList(toDoList)
{
    var jsonData = JSON.stringify(toDoList);
    window.localStorage.setItem(EMPLACEMENT_STORAGE, jsonData);
}


function loadToDoList()
{
    var jsonData = window.localStorage.getItem(EMPLACEMENT_STORAGE);
    //Deserialize
    var toDoList = JSON.parse(jsonData);
    return toDoList;
}


function updateDisplay()
{
    var toDoList = loadToDoList();
    console.log(toDoList);
    $("#tasks_list_ul ul").html("");

    if (toDoList != null && toDoList != undefined ) {
        for (var i = 0 ; i < toDoList.length ; i++)
        {
            $("#tasks_list_ul ul").append('<li><em data-index="' + i + '">' + toDoList[i].task_content +'</em></li>');
        }
    }
    console.log("The display is now update!");
}

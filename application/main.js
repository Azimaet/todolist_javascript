'use strict';

/**************************************************/
/***************** MAIN JAVASCRIPT ****************/
/**************************************************/

/* Firstly, I put a listener on the Dom, to be sure the DOM is known before to call my Js application. */
$(document).ready(function()
{
    console.log("The dom is Ok");
    /* I have to define the three basics actions of the Todolist: Add a task, Save a task, and delete a task.
    I choose to write it in jQuery because i think it's more readable.
    Now, I put the listeners! The functions are defined in my Model events.js*/
    $("#add_task").on("click", onClickAddTask);
    $("#save_task").on("click", onClickSaveTask);
    $("#delete_task").on("click", onClickDeleteTasks);

    /* Now I want to update the display, so i call updateDisplay who id defined */
    updateDisplay();
});

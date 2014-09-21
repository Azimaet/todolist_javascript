'use strict'


function saveToLocalStorage(emplacement, data)
{

    var jsonData = JSON.stringify(toDoList);
    window.localStorage.setItem(emplacement, jsonData);

}

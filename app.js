cnt = 0;

function addElem(text) {
    var i = cnt;
    $("#list").append("<li id='elem" + i + "'></li>");
    $("#elem" + i).append("<span>" + text + "</span>");
    $("#elem" + i).append("<button id='remove" + i + "'>Удалить</button>");
    $("#remove" + i).click(function () {
        $("#elem" + i).remove();
    });
    cnt++;
}

$(document).ready(function () {
    $("#root").append("<ul id='list'></ul>");
    addElem("Сделать задание #3 по web-программированию");
    $("#root").append("<input id='add_task_input'></input>");
    $("#root").append("<button id='add_task'>Добавить задачу</button>");
    $("#add_task").click(function () {
        text = $("#add_task_input").val();
        addElem(text);
    })
});
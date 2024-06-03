"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewTask = void 0;
var uuid_1 = require("uuid");
var list = document.querySelector("#list");
var form = document.querySelector("#formEl");
var inputEL = document.querySelector("#inputEl");
var tasks = [];
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
    event.preventDefault();
    if ((inputEL === null || inputEL === void 0 ? void 0 : inputEL.value) == "" || (inputEL === null || inputEL === void 0 ? void 0 : inputEL.value) == null)
        return;
    var newTask = {
        id: (0, uuid_1.v4)(),
        title: inputEL.value,
        complited: false,
        createAt: new Date(),
    };
    tasks.push(newTask);
    addNewTask(newTask);
    inputEL.value = "";
});
function addNewTask(task) {
    var item = document.createElement("li");
    var label = document.createElement("label");
    var checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.addEventListener("click", function () {
        task.complited = checkBox.checked;
    });
    label.innerHTML = checkBox + task.title;
    item.appendChild(label);
    list === null || list === void 0 ? void 0 : list.appendChild(item);
}
exports.addNewTask = addNewTask;
//# sourceMappingURL=index.js.map
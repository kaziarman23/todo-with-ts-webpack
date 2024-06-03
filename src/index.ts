import { v4 as uuidV4 } from "uuid";

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#formEl");
const inputEL = document.querySelector<HTMLInputElement>("#inputEl");

const tasks: Task[] = [];

type Task = {
    id: string;
    title: string;
    complited: boolean;
    createAt: Date;
};

form?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputEL?.value == "" || inputEL?.value == null) return;

    const newTask: Task = {
        id: uuidV4(),
        title: inputEL.value,
        complited: false,
        createAt: new Date(),
    };
    tasks.push(newTask);

    addNewTask(newTask);
    inputEL.value = "";
});

export function addNewTask(task: Task) {
    const item = document.createElement("li");
    const label = document.createElement("label");
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.addEventListener("click", () => {
        task.complited = checkBox.checked;
    });
    label.innerHTML = checkBox + task.title;
    item.appendChild(label);
    list?.appendChild(item);
}

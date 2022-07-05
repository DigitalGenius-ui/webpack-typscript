import { todoArr } from "./addTodo";
import { removeStorage } from "./deleteItems";
let todoContainer = document.querySelector(".result");

export const todoUI = () => {
    todoContainer!.innerHTML = "";
    todoArr.forEach((item) => {
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        div.innerText = item.title;
        div.appendChild(span);
        div.className = "todoTitle";
        span.className = "remove";
        span.dataset.id = `${item.id}`;
        todoContainer?.appendChild(div);

        span.onclick = () => removeStorage(Number(span.dataset.id));
    });

}
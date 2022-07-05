import { todoArr } from "./addTodo";
import { setStorage } from "./localStorage";

let todoContainer = document.querySelector(".result");

export const removeUi = () => {
    todoContainer?.addEventListener("click", (e) => {
        const element = e.target as Element;
        const parent = element.parentElement as Element;
        if(element.classList.contains("remove")){
            parent.remove();
        }
    })
}

export const removeStorage = (id : number) => {
    let todoFilter = todoArr.filter((item) => item.id !== id);
    setStorage(todoFilter);
}
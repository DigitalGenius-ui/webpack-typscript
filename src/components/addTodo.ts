// import { setStorage } from "./localStorage";
import { getStorage, setStorage } from "./localStorage";
import { Todo } from "./todoTypes";
import { todoUI } from "./todoUi";
const title = document.querySelector(".title") as HTMLInputElement;

export let todoArr:Todo[] = getStorage();
todoArr.forEach(() => todoUI());

export const addTodo = () => {
    const id = Math.floor(Math.random() * 100000);
    const todo : Todo = {
        id : id,
        title : title?.value
    }
    todoArr.push(todo);
    todoUI();
    setStorage(todoArr);
    title.value = "";
}
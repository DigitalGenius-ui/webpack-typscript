import { Todo } from "./todoTypes";

export const setStorage = (todo: Todo[]) => {
    return localStorage.setItem("todo", JSON.stringify(todo))
}

export const getStorage = () => {
    const todoExist = localStorage.getItem("todo");
    if(todoExist === null) return [];
    return JSON.parse(todoExist);
}
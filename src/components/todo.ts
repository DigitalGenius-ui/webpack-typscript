const form = document.querySelector(".form");
import { addTodo } from './addTodo';
import { removeUi } from './deleteItems';

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

removeUi();
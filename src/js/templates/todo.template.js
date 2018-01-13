export let todoTemplate = (todo) => `<li>
        <span class="text">${todo.name}</span>
        <span class="todo-action-wrap">
            <span>tick</span>
            <span>star</span>
            <span>cross</span>
        </span>
    </li>`;
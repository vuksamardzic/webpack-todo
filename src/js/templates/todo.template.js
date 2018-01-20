export let todoTemplate = (todo) => `<li class="todo-item">
        <span class="text ${todo.props.completed ? 'text-crossed' : ''}">${todo.name}</span>
        <span class="todo-action" uuid=${todo.id}>
            <span class=${todo.props.completed ? '' : 'icon-checkmark'}></span>
            <span class=${todo.props.completed ? '' : todo.props.favourite ? 'icon-star-full' : 'icon-star-empty'}></span>
            <span class="icon-cross"></span>
        </span>
    </li>`;
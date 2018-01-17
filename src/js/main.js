import { addTodoTasks, cleanTodoTasks } from './helpers/crud-todo-tasks'
import { todo } from './models/todo.model'
import { todo_array } from './models/todo-array.model'
import { todoTemplate } from './templates/todo.template'
import { navClassToggle } from './helpers/nav-class-toggle'

import '../scss/main.scss'

const nav = document.querySelectorAll('.todo-nav');

for ( let i of nav ) {
    i.addEventListener('click', function (ev) {
        todo.name = 'vuk';
        todo_array.push(todoTemplate(todo));

        navClassToggle(this, nav);

        addTodoTasks('.todo-task-list', todo_array);
    });
}
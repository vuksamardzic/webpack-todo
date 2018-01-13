import { addTodoTasks, cleanTodoTasks } from './helpers/crud-todo-tasks'
import { todo, todoListArray } from './models/todo.model'
import { todoTemplate } from './templates/todo.template'

const nav = document.querySelectorAll('.todo-nav');

for ( let i of nav ) {
    i.addEventListener('click', function (ev) {
        todo.name = 'wolfy';
        todoListArray.push(todoTemplate(todo));
        todo.name = 'vuk';
        todoListArray.push(todoTemplate(todo));

        addTodoTasks('.todo-task-list', todoListArray);
    });
}
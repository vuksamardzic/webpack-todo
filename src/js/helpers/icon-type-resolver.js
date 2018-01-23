import { todoModelArray } from '../models/todo.model'
import { _render } from './render';
import { stashLocalStorage } from './local-storage.service';

const check = 'icon-check';
const star = 'icon-star';
const starEmpty = 'icon-star-empty';
const cross = 'icon-close';

export let iconTypeResolver = (iconClass, currentNav, uuid) => {
    switch (iconClass) {
        case check:
            todoModelArray.map(i => i.id === uuid ? (i.props.completed = true, i.props.active = false, i.props.favourite = false) : i);
            stashLocalStorage('todo-app', todoModelArray);
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
            break;
        case starEmpty:
            todoModelArray.map(i => i.id === uuid ? i.props.favourite = true : i);
            stashLocalStorage('todo-app', todoModelArray);
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
            break;
        case star:
            todoModelArray.map(i => i.id === uuid ? i.props.favourite = false : i);
            stashLocalStorage('todo-app', todoModelArray);
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
            break;
        case cross:
            let index;
            todoModelArray.map((i, todoIndex) => i.id === uuid ? index = todoIndex : i);
            todoModelArray.splice(index, 1);
            stashLocalStorage('todo-app', todoModelArray);
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
            break;
    }
}
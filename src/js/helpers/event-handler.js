import { todoModel, todoModelArray } from '../models/todo.model'
import { todoTemplate } from '../templates/todo.template'
import { navToggleActive } from '../helpers/nav-toggle'
import { $nav, $primaryNav } from '../helpers/cached-dom'
import { _render } from './render';

export let navClickHandler = (ev) => {
    navToggleActive(ev.target, $nav, 'active');
};

export let iconClickHandler = (ev) => {

    const iconClass = ev.target.classList[0];
    const uuid = ev.target.parentElement.attributes['uuid'].value;
    let currentNav;

    for ( let i of $nav ) {
        if ( i.classList.contains('active') ) {
            currentNav = i;
            break;
        }
    }

    switch ( iconClass ) {
        case 'icon-checkmark':
            todoModelArray.map(i => i.id === uuid ? (i.props.completed = true, i.props.active = false, i.props.favourite = false) : i);
            localStorage.setItem('todo-app', JSON.stringify(todoModelArray));            
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
        break;
        case 'icon-star-empty':
            todoModelArray.map(i => i.id === uuid ? i.props.favourite = true : i);
            localStorage.setItem('todo-app', JSON.stringify(todoModelArray));
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
        break;
        case 'icon-star-full':
            todoModelArray.map(i => i.id === uuid ? i.props.favourite = false : i);
            localStorage.setItem('todo-app', JSON.stringify(todoModelArray));
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
        break;
        case 'icon-cross':
            let index;
            todoModelArray.map((i, todoIndex) => i.id === uuid ? index = todoIndex : i);
            todoModelArray.splice(index, 1);
            localStorage.setItem('todo-app', JSON.stringify(todoModelArray));
            _render(todoModelArray.filter(i => i.props[currentNav.innerText.toLowerCase()]));
        break;
    }

}

export let formSubmitHandler = (ev) => {

    ev.preventDefault();

    for ( let i of ev.target ) {

        if ( i.value !== '' && i.type === 'text' ) {

            todoModelArray.push(todoModel(i.value));
            localStorage.setItem('todo-app', JSON.stringify(todoModelArray));
            i.value = '';
            navToggleActive($primaryNav ,$nav, 'active');
            break;
        }

    }

}
import { todoModel, todoModelArray } from '../models/todo.model'
import { todoTemplate } from '../templates/todo.template'
import { navToggleActive } from '../helpers/nav-toggle'
import { iconTypeResolver } from './icon-type-resolver'
import { $nav, $primaryNav } from '../helpers/cached-dom'
import { _render } from './render';
import { interval } from './interval';

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

    iconTypeResolver(iconClass, currentNav, uuid);
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

export let inputFocusHandler = (ev) => {
    clearInterval(interval);
    
    ev.target.value = '';    
    ev.target.removeEventListener('focus', inputFocusHandler);
}
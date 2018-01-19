import { $todoTaskList } from "./cached-dom";
import { todoTemplate } from "../templates/todo.template";
import { todoModelArray } from "../models/todo.model";
import { iconClickHandler } from "./event-handler";

export const _render = (filteredArray) => {
    const innerHTML = filteredArray ? filteredArray.map(i => todoTemplate(i)).join('') : todoModelArray.filter(i => i.props.active).map(i => todoTemplate(i)).join('');
    $todoTaskList.innerHTML = innerHTML;

    for ( let todo of $todoTaskList.children ) {
       for ( let todoAction of todo.children ) {
            if ( todoAction.classList.contains('todo-action') ) {
                for ( let icon of todoAction.children ) {
                    icon.addEventListener('click', iconClickHandler);
                }
            }
       }
    }
};
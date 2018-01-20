import { todoModelArray } from "../models/todo.model";
import { _render } from "./render";

export let localStorageLoader = () => {
    const data = localStorage.getItem('todo-app');
    
    if ( localStorage !== 'undefined' && data ) {
        JSON.parse(data).map(i => todoModelArray.push(i));
        _render();
    }
};
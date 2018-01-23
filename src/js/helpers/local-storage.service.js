import { todoModelArray } from "../models/todo.model";
import { _render } from "./render";

export let localStorageLoader = (key) => {
    const data = localStorage.getItem(key);
    
    if ( localStorage !== 'undefined' && data ) {
        JSON.parse(data).map(i => todoModelArray.push(i));
        _render();
    }
};

export let stashLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}
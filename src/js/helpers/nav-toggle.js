import { _render } from "./render";
import { todoModelArray } from "../models/todo.model";

export let navToggleActive = (ev, nav, selector) => {

    if ( !ev.classList.contains(selector) ) {
        for ( let i of nav ) {
            if ( i.classList.contains(selector) ) {
                i.classList.remove(selector);
            }
        }
    
        ev.classList.add(selector);
        _render(todoModelArray.filter(i => i.props[ev.innerText.toLowerCase()]));             
    } else {
        _render();
    }
    
};
export let $nav = document.querySelectorAll('.todo-nav');

let temp;
for (let i of $nav ) {
    
    if ( i.innerText.toLowerCase() === 'active' ) {
        temp = i;
        break;
    }
    
} 

export let $primaryNav = temp;
export let $form = document.querySelector('form');
export let $input = $form[0];
export let $todoTaskList = document.querySelector('.todo-task-list');
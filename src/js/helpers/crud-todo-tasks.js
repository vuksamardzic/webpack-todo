export const addTodoTasks = (selector, items) => {
    let tasks = document.querySelector(selector);
    tasks.innerHTML = items.join('');
};

export const cleanTodoTasks = (selector) => {
    const tasks = document.querySelector(selector);
    tasks.innerHTML = '';
};
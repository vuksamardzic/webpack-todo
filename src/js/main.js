import '../scss/main.scss'
import { navClickHandler, formSubmitHandler, inputFocusHandler } from './helpers/event-handler'
import { $nav, $form, $input } from './helpers/cached-dom'
import { localStorageLoader } from './helpers/local-storage.service';

for ( let i of $nav ) {
    i.addEventListener('click', navClickHandler);
}

localStorageLoader('todo-app');

$form.addEventListener('submit', formSubmitHandler);
$input.addEventListener('focus', inputFocusHandler);
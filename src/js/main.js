import '../scss/main.scss'
import { navClickHandler, formSubmitHandler } from './helpers/event-handler'
import { $nav, $form } from './helpers/cached-dom'
import { localStorageLoader } from './helpers/local-storage-loader';

for ( let i of $nav ) {
    i.addEventListener('click', navClickHandler);
}

localStorageLoader();

$form.addEventListener('submit', formSubmitHandler);
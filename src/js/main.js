import { navClickHandler, formSubmitHandler } from './helpers/event-handler'
import { $nav, $form } from './helpers/cached-dom'
import '../scss/main.scss'

for ( let i of $nav ) {
    i.addEventListener('click', navClickHandler);
}

$form.addEventListener('submit', formSubmitHandler);
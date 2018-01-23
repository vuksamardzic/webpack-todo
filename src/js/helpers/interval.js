import { $input } from "./cached-dom";

export let interval = setInterval(() => {
    $input.value === '' ? $input.value = '_' : $input.value = '';
}, 500);
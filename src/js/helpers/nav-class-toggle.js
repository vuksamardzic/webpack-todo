export let navClassToggle = (curr, nav) => {
    for ( let i of nav ) {
        if ( i.classList.contains('active') ) {
            i.classList.remove('active');
        }
    }

    curr.classList.add('active');
};
/*
* [X] `mouseover`
* [ ] `keydown`
* [ ] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`
*/

const h1Tag = document.querySelector('h1.logo-heading');
h1Tag.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    h1Tag.style.cursor = 'pointer';
    h1Tag.style.transform = 'scale(1.2)';
});
h1Tag.addEventListener('mouseout', (e) => {
    e.stopPropagation();
    h1Tag.style.transform = 'scale(1.0)';
});



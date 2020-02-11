/*
* [X] `mouseover`
* [X] `keyup`
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

const emailForm = document.querySelector('#emailForm');
emailForm.addEventListener('keyup', (e) => {
    let displayEmail = document.querySelector('p#emailGiven');
    displayEmail.style.display = "block";
    if (emailForm.value !== "") {
        displayEmail.innerHTML = "Welcome " + emailForm.value;
    } else {
        displayEmail.style.display = "none";
    }
});

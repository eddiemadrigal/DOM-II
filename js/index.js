/*
* [X] `mouseover`
* [X] `keyup`
* [X] `scroll`
* [X] `dragstart`
* [X] `dragend`
* [X] `dragover`
* [X] `dragenter`
* [X] `drop`
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

document.addEventListener('scroll', () => {
    let showY = document.querySelector('#showY span');
    showY.innerHTML = window.scrollY;
});

let draggedItem = null;

const plane = document.querySelector('p#plane');

plane.addEventListener('dragstart', () => {
    draggedItem = plane;
    setTimeout(() => {
        draggedItem.style.display = 'none';
    }, 0);
    
});

plane.addEventListener('dragend', () => {
    setTimeout(() => {
        draggedItem.style.display = 'block';
    }, 0);
});

const dest1 = document.querySelector('#dest1');
const dest1Check = document.querySelector('#dest1Check');

dest1.addEventListener('dragover', e => {
    e.preventDefault();
});

dest1.addEventListener('dragenter', e => {
    e.preventDefault();
});

dest1.addEventListener('drop', () => {
    dest1Check.style.display = 'inline';
    dest1Check.style.color = "green";
});

const dest2 = document.querySelector('#dest2');

dest2.addEventListener('dragover', e => {
    e.preventDefault();
});

dest2.addEventListener('dragenter', e => {
    e.preventDefault();
});

dest2.addEventListener('drop', () => {
    dest2Check.style.display = 'inline';
    dest2Check.style.color = "green";
});


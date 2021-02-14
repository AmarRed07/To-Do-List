// let button = document.getElementById('my-button');
// console.log(button);

// let buttonsByTag = document.getElementsByTagName('button');
// console.log(buttonsByTag);

// let buttonsByClass = document.getElementsByClassName('my-class');
// console.log(buttonsByClass);

// let buttonsByCSSSelector = document.querySelectorAll('.my-class');
// console.log(buttonsByCSSSelector);


// Changes Element suchs as Paragraph in HTML  (15)
// document.getElementById('content').innerHTML = 'something else';

let button = document.getElementById('btn');
let content = document.getElementById('content');

// Changes value with a button (16)
// button.addEventListener('click', () => {
//     if(content.innerHTML === 'Goodbye.') {
//         content.innerHTML = 'Hello.';
//     } else {
//         content.innerHTML = 'Goodbye.';
//     }
// });

// Remove Elements (17)
// document.getElementById('remove').addEventListener('click', () => {
//     content.parentNode.removeChild(content);
// });



// Adding Elements (18)
// document.getElementById('add').addEventListener('click', () => {
//     let parent = document.getElementById('paragraphs');
//     let newElement = document.createElement('p');
//     newElement.innerHTML = 'This is a new paragraph. ';
//     parent.appendChild(newElement);
// });

// Remove Elements Part 2 (17) & (19)
document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
});

let id = 0;



// Adding Elements (18) part 2
document.getElementById('add').addEventListener('click', () => {
    let parent = document.getElementById('paragraphs');
    let newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id', id++)
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';
});
// Add Pragraph..
const article = document.getElementById('first-post');
const newPragraph = document.createElement('p');
newPragraph.innerHTML = 'This pragraph add by JavaScript.'
article.appendChild(newPragraph);

// Add List Item...
// const listSection = document.querySelector('ol li');
const listSection = document.getElementById('list-items');
const addLi = document.createElement('li');
addLi.innerHTML = 'Hello This list is add by JavaScript';
listSection.appendChild(addLi);
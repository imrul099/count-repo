// const parent =  document.querySelector('.grandparent');
// const children = parent.children;
// console.log(children[1].children);

// const gp = document.querySelector('.grandparent');
// const children = gp.querySelectorAll('.item');
// console.log(children);


// const children = document.querySelector(".item");
// const parent = children.parentElement.parentElement;
// console.log(parent);

// Note::: children to grandparent!!!
// const children = document.querySelector('.item');
// const gp = children.closest('.grandparent');
// console.log(gp);

// const chacha = document.getElementById('parent-one');
// const parent1 = chacha.previousElementSibling;
// console.log(parent1);

const paragraph = document.createElement('p');
paragraph.innerText = 'they are so much attitue for any kind of position, so it is prove that man is mortal';

const container = document.getElementById('grandparent1');
container.appendChild(paragraph);
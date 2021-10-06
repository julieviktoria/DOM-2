/* 

        Element     .append
                    .prepend


        Node         .createElement
                    .appendChild
                    .removeChild
                    .replaceChilde

*/

/* const element = document.createElement('div')

// element.id = 'jsElement';
// element.innerText = 'foo';
// element.className = 'jsClass';
// element.dataset.jsData = 'bar'

const li = document.createElement('li');
li.innerText = 'hei'; 

element.appendChild(li)

const li2 = document.createElement('li');
li.innerText = 'hei2'; 

element.appendChild(li2)


document.body.appendChild(element);

*/

const ul = document.createElement('ul');

// for (let times = 1; times <= 5; times++) {
//    const li = document.createElement('li')
//    li.innerText = 'li ${times}'
//    UL.appendChild(li);
//}

const fruits = [
    'banana',
    'apple',
    'orange',
    'pear',
    'strawberry'
]

fruits.forEach(fruit => {
    const li = document.createElement('li'); 
    li.innerText = fruit;
    ul.appendChild(li);
})

document.body.prepend(ul);


const div = document.createElement('div'); 
div.innerText = 'NOT FRUIT'

ul.append(div)
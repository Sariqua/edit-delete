/*
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='red';

for(var i=0;  i<li.length; i++){
    li[i].style.backgroundcolor='#f4f4f4';
}
*/



var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';



var input =document.querySelector('input');
input.value='Hello World';

var submit =document.querySelector('input[type="submit"]');
submit.value='Send';


var item=document.querySelector('.list-group-item');
item.style.color='red';


var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';


var Seconditem=document.querySelector('.list-group-item:nth-child(2)');
Seconditem.style.color='coral';



var title = document.querySelectorAll('.title');
console.log(title);
title[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0; i<odd.length; i++){
    odd[i].getElementsByClassName.backgroundcolor='#f4f4f4';
}

var itemList = document.querySelectorAll('#items');
console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor ='#f4f4f4';
console.log(itemList.parentNode.parentNode);

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor ='green';
console.log(itemList.parentElement.parentElement);

console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'Blue';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'yellow';

var newDiv = document.createElement('div');

newDiv.className = 'hello';

newDiv.id = 'hello 1';

newDiv.setAttribute('title', 'Helllo Div');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize ='39px';

container.insertBefore(newDiv, h1);



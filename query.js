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







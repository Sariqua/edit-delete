var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
function addItem(e)
{
    e.preventDefault();

    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));

    var deleteBtn = document.createElement('button');
    deleteBtn.className= 'btn btn-danger btn-sm float-rigt delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
    itemList.appendChild(li);


    itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure:')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
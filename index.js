let list = [];

function addToDo() {
    const inputValue = document.querySelector('.todo-actions_input').value;
    const toDoObject = {
        text: inputValue,
        status: 'toBeDone',
        date: new Date(),
    };
    list.push(toDoObject);
    
    const toDoContainer = document.querySelector('.todo-list');
    toDoContainer.innerHTML = '';
    
    list.forEach(function(toDoItem, index) {
        const toDoStructure = 
        `<div class="todo-list_item">
          <label class="toBeDone"><input type="checkbox" id="to-do-item" value="to-do-item" onclick="checkMark(event, ${index})">${toDoItem.text}</label>
        </div>`;
        toDoContainer.innerHTML = toDoContainer.innerHTML + toDoStructure;
    });

}

function checkMark(event, index) {
    const checkbox = event.target;
    const label = checkbox.parentNode;
    const toDoItem = list[index];

    if (checkbox.checked) {
        label.classList.add('checked');
        toDoItem.status = 'Done';

    } else {
        label.classList.remove('checked');
        toDoItem.status = 'toBeDone';
    } 

}

function removeDone() {
    // Filtrar los elementos que tienen el status 'Done'
    list = list.filter(function(hola) {
      return hola.status !== 'Done';
    });
  
    // Actualizar la lista en el HTML
    const toDoContainer = document.querySelector('.todo-list');
    toDoContainer.innerHTML = '';
  
    list.forEach(function(toDoItem, index) {
      const toDoStructure = 
      `<div class="todo-list_item">
        <label class="${toDoItem.status}"><input type="checkbox" id="to-do-item" value="to-do-item" onclick="checkMark(event, ${index})">${toDoItem.text}</label>
      </div>`;
      toDoContainer.innerHTML = toDoContainer.innerHTML + toDoStructure;
    });
  }
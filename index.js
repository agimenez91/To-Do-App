const list = [];

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
        toDoItem.status === 'Done';
        console.log(toDoItem.status)
    } else {
        label.classList.remove('checked');
        toDoItem.status === 'toBeDone';
        console.log(toDoItem.status)
    } 
}







// function checkMark(event) {
//   const checkbox = event.target;
//   const label = checkbox.parentNode;
//   if (checkbox.checked) {
//       label.classList.add('checked');
//   } else {
//       label.classList.remove('checked');
//   }
// }



// function changeStatus(todo) {
//     if (todo.status === 'toBeDone') {
//       todo.status = 'Done';
//       console.log(todo.status)
//     }
//   }

// changeStatus(toDoObject);

// function checkMark() {
//     document.querySelector('.toBeDone').classList.toggle("checked")
  
// }

// const checkbox =  document.querySelector('.toBeDone');
// checkbox.addEventListener("click", function() {
//   const todoListItems = document.querySelectorAll(".todo-list_item");
//   todoListItems.forEach(function(item) {
//     item.status = "done";
//     console.log('item.status')
//   });
// });
  

// function checkMark() {
//     if (toDoObject.status === "done") {
//         document.querySelector('.to-do').classList.add("checked");
//       } else {
//         document.querySelector('.to-do').classList.remove("checked");
//       }   
// }

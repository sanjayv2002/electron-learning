let list = document.getElementById("list");
let newTask = document.getElementById("newTask");

document.getElementById("addTask").addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend',`<li class="list-group-item">${newTask.value}</li>`);
    newTask.value ='';
});
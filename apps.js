// let entry = document.getElementById("entry");
// entry.addEventListener("click", addTask);


// let todoList = []
// let title = document.getElementById("title")
// let description = document.getElementById("description")
// let date = document.getElementById("date")


// function addTask(){
//     todoList.push(
//         {
//             title: title.value,
//             description: description.value,
//             date: date.value
//         }
//     );
    
//     console.log(todoList);
       

// }

window.onload = dispatch;
const addTask = e =>{
    const task = document.querySelector("form input");


    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({
            title: document.getElementById('title').value,
            date: document.getElementById('date').value,
            desc: document.getElementById('desc').value
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        dispatch();
        document.querySelector('form').reset();
        document.getElementById('title').focus();
        e.preventDefault();
}
function dispatch(){
    console.log(localStorage.getItem('formData'));
    if(localStorage.getItem('formData')){
        var list = document.querySelector("ul");
        list.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data =>{
            
            list.innerHTML += ` 
                <div class="holder" >
                        
                    <div class="upper">
                        <input type="text" value="${data.title}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
                        <input type="date" value="${data.date}" class="task" onfocus="getCurrentTask();" onblur="editTask(this)">
                    </div>  
                    <div class="content">
                        <input type="text" value="${data.desc}" class="task1" onfocus="getCurrentTask();" onblur="editTask(this)">
                        <input type="button" value="DELETE" id="delete" onclick="removeTask(this)">
                        <input type="button" value="EDIT" id="edit">
                        </div>
                    <input id = "check" type="checkbox" onclick="taskComplete(this);" class="check">
                        
                </div>`;

        });

    }


}

function taskcomplete(event){
    
    // alert("this task is complete")

}

function removeTask(event){
    let tasks = Array.from(JSON.parse(localStorage.getItem("formData")));
    tasks.forEach(task => {
        tasks.splice(tasks.indexOf(task), 1);
    });
    
    event.parentNode.parentNode.remove();
    console.log(tasks);
    
    localStorage.setItem("formData", JSON.stringify(tasks));
}



    
    // function deleteTask(){
    //     'use strict';
    //     var deleteElement = prompt('Which task would you like to delete?', 'Enter task number');
        
    //     //check validity of input
    //     if( (isNumber(deleteElement)) ){
            
    //         for (var counter = 0, length = tasks.length; counter < length; counter++){
    //             if (deleteElement == tasks[counter]){
    //                 tasks.splice(tasks[counter] - 1, 1);
    //             }
    //         }
    //         displayList();
    //     }
    //     else{
    //         alert('Input must be a number');
    //     }
    // }


//     var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


    


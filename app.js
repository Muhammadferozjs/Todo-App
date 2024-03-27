let todo = document.querySelector(`#todoinput`)
let ol = document.querySelector(`ol`)


let arr = []

function AddTodo(){
    ol.innerHTML = ''
    arr.push(todo.value)
    console.log(arr)


for (let i=0;i<arr.length;i++){
    ol.innerHTML += `<li>${arr[i]}
    <button onclick = "deleteTodo(${i})" class="btn" >delete</button>
    <button onclick = "editTodo(${i})" class="btn1" >edit</button>
    </li>
    `
}

todo.value = ''
}

function deleteTodo(index){
   
   ol.innerHTML =''
   console.log(`delete todo`,index)
   arr.splice(index,1)

  
    for (let i=0;i<arr.length;i++){
        ol.innerHTML += `<li>${arr[i]}
        <button onclick = "deleteTodo(${i})"  class="btn" >delete</button>
        <button onclick = "editTodo(${i})"  class="btn1">edit</button>
        </li>
         
        `
    }
    
}

function editTodo(index){
    ol.innerHTML =''
    
    let update = prompt(`enter your updated value`)
    console.log("editTodo",index)
    arr.splice(index,1,update)

    for (let i=0;i<arr.length;i++){
        ol.innerHTML += `<li>${arr[i]}
        <button onclick = "deleteTodo(${i})" class="btn" >delete</button>
        <button onclick = "editTodo(${i})" class="btn1" >edit</button>
        </li>
        `
    }
}
       

    




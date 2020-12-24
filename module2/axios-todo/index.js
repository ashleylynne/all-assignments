// Part 1 - GET
// The user can see their current list of todos.
// Todos show up as soon as the page loads.
// If a todo item is complete, it should have a strikethrough line on it
// Images should be displayed as images if there are any
// Hints:

// A createTodo function that takes one todo and inserts it to the DOM is very userfull

// Use postman to get those first few todos in there with some images so you can style your list!

// The baseUrl is: https://api.vschool.io/<yourname>/todo[/<todoId>]

// (Where <yourname> is your actual name, i.e.: https://api.vschool.io/jonsmith/todo) and <todoId> is the _id attribute of an already-existing todo item. (Only to be used for GET (one), PUT, and DELETE requests.) See the Using id section below for more info on how to use _id in your requests.

// All todo items are tracked by your name so don't forget to enter it in the url.

// GET requests


// Display All Todos at top of page. This will be the main container where all elements will go

const list = document.getElementById("list")

// GET one todo leave out for now
// function getOne() {
//     axios.get("https://api.vschool.io/simpfriedrice/todo" + todo._id, todo)
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => [
//         console.log(err)
//     ]);
// }


// GET all

// Get Todos Button element
const getBtn = document.getElementById('get-button')
// Get Todos Button function
getBtn.addEventListener("click", getToDos)

// Get All todos Function
function getToDos() {
    // Get request
    axios.get("https://api.vschool.io/simpfriedrice/todo")
    .then(res => {
        // log response
        console.log(res)
        // user creates todos variable
        const todos = res.data
        // List ToDos Loop
        for(let i = 0; i < todos.length; i++) {
            makeOne(todos[i])
        }
    })
    .catch(err => {
        console.log(err)
    })
};
// List todos function
// function listToDos(todos) {
//     for(let i = 0; i < todos.length; i++) {
//         makeOne(todos[i])
//     }
// };

// Create one to do this also needs a spot where we make a delete button and a put button
function makeOne(todo){
    // Create div container
    const container = document.createElement("div")
    // Create h1 element
    const h1 = document.createElement("h1")
    // Create title
    h1.textContent = todo.title
    // Append element to page
    document.body.appendChild(h1)
    // make a new input
    const newInput = document.createElement("input");
    // make it a checkbox
    newInput.type = "checkbox";
    // add text
    newInput.textContent = "";
    // append to div
    document.body.appendChild(newInput)
    // Define checked box = completed todo
    newInput.checked = todo.completed;
    // Append new div to list
    list.appendChild(container)
    // Append new h1 to div
    container.appendChild(h1)
    // Append user input to div (checked box)
    container.appendChild(newInput)
    // addEventListener take 2 arguments, action and the function
    newInput.addEventListener("change", function(e) {
        e.preventDefault();
        axios.put("https://api.vschool.io/simpfriedrice/todo/" + todo._id, {completed
        })
            // This should fire off a linethrough when the todo is completed
            .then(res => {
                h1.style.textDecoration = res.data.completed ? "line-through": "none"
            })
    })
    // add edit button for each todo
    for(i=0; i<todos.length; i++) {
        // create buttone element
        const putBtn = document.createElement("button")
        putBtn.textContent = "edit"
        // append to the todo
        h1.appendChild(putBtn)
        // add event listener
        putBtn.addEventListener("click", function(e){
            e.preventDefault();
            axios.put("https://api.vschool.io/simpfriedrice/todo/" + todo._id, todo)
                //A bit confused on exactly what promise to write here or how to write it
                .then(res => res.data.newInput) //totally just guessing here I have no idea
        })   

    }
    // add delete button for each todo
    for(i=0; i<todos.length; i++) {
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "delete"
        // Append child
        h1.appendChild(deleteBtn)
        deleteBtn.addEventListener("click", function(e){
            // Allows user to delete specific todo
            e.preventDefault();
            axios.delete("https://api.vschool.io/simpfriedrice/todo/" + todo._id, userPost)
                .then(res=>console.log(res.data))
                .catch(err=>console.log(err))
        })
    }
};




// Part 2 - POST
// The user can add new todos to their list. The new item should be 
// posted to the todo API so a future reload of the page will still display 
// that new todo item. Making the new todo appear without a refresh is extra credit, 
// but you're encouraged to attempt it.
// A user should be able to geive the item a title.
// A user should be able to give the item a price.
// A user should be able to give the item a description.
// A user should be able to attach an imgUrl to the item

// Clearlist function to avoid data repeat on page
function clearList() {
    const list = document.getElementById('list')
    while(list.firstChild) {
        list.removeChild(list.firstChild)
    }
}
// Add ToDos Form
const addToDoForm = document["add-todo-form"]

// Add Todo button

addToDoForm.addEventListener("submit", function(e){
    e.preventDefault();
        console.dir(addToDoForm)
        const toDoContent = addToDoForm.title.value
        console.log(toDoContent);
        const userPost= {
            title : toDoContent
        }
        postToDo(userPost);
    });

// Post ToDo Function
function postToDo(userPost) {
    axios.post("https://api.vschool.io/simpfriedrice/todo", userPost)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    });
}

// Part 3 - PUT Part 1
// Each todo will have a checkbox where it can be marked complete or incomplete
// Checking the checkbox should update the database

// get one

getOne(todos);


// Put ToDos Function
function putToDos(userPost) {
    axios.put("https://api.vschool.io/simpfriedrice/todo/" + todo._id, userPost)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}

// putbutton

const putBtn = document.createElement("button")

putBtn.addEventListener("click", putToDos) 

// Clear todos
clearList(todos);

// Display New ToDos

function displayTodos(todos){
    todos.map(todo => {
        // Create Element Container
        let div = document.createElement('div')
        //Create Elements
        let h1 = document.createElement('h1')
        //Add Text
        h1.textContent = todo.title
        //Add Element to Container
        div.appendChild(h1)
        //Add Container to HTML
        document.getElementById('list').appendChild(div)
    })
}



// update

// List data
getToDos(todos);



// Part 4 - DELETE
// A user will be able to delete todos (this is different from marking a todo as "completed")
// Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo


// delete

const deleteBtn = document.getElementById('delete-button')

// addEventListener
deleteBtn.addEventListener("click", deleteToDo)


// Delete Function
function deleteToDo() {
    axios.delete("https://api.vschool.io/simpfriedrice/todo/" + todo._id, todo)
        .then(res => console.log(res))
        .catch(err => console.log(err))

}




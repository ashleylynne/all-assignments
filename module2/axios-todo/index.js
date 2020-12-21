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
// GET all todos: https://api.vschool.io/<yourname>/todo

// GET one todo: https://api.vschool.io/<yourname>/todo/<todoId>


// GET all

// Get Todos Button element
const getBtn = document.getElementById('get-button')
// Get Todos Button function
getBtn.addEventListener("click", getToDos)

// Get todos Function
function getToDos() {
    // Get request
    axios.get("https://api.vschool.io/simpfriedrice/todo")
    .then(res => {
        // log response
        console.log(res)
        // user creates todos variable
        const todos = res.data
        listToDos(todos)   
    })
    .catch(err => {
        console.log(err)
    })
};
// List todos function
function listToDos(todos) {
    for(let i = 0; i < todos.length; i++) {
        makeOne(todos[i])
    }
};

// Create one to do
function makeOne(todo){
    // Create h1 element
    const h1 = document.createElement("h1")
    // Create title
    h1.textContent = todo.title
    // Append element to page
    document.body.appendChild(h1)
    // make a new input, give it some text, add event lstener
    // .type = "checkbox"
    const newInput = document.createElement("input.type='checkbox'");
    newInput.textContent = "";
    // addEventListener take 2 arguments, action and the function
    newInput.addEventListener("click", function(e) {
        e.preventDefault();
        if (checked === true) {
            document.body.appendChild(newInput)
        };
    });
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
function putToDos() {
    const userPost = 
    axios.put("https://api.vschool.io/simpfriedrice/todo", userPost)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
}
// Part 3 - PUT Part 1
// Each todo will have a checkbox where it can be marked complete or incomplete
// Checking the checkbox should update the database

// get one

// code goes here but idk if we put first or not lol brb

// put

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

// putbutton

const putBtn = document.getElementById("put-todo-button")

putBtn.addEventListener("click", putToDos) 


// update


// Part 4 - DELETE
// A user will be able to delete todos (this is different from marking a todo as "completed")
// Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo


// delete

const deleteBtn = document.getElementById('delete-button')

deleteBtn.addEventListener("click", deleteToDo)

function deleteToDo() {
    axios.delete("https://api.vschool.io/simpfriedrice/todo/<id>")
        .then(res => console.log(res))
        .catch(err => console.log(err))

}




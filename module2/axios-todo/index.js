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

// createTodo function would go here. this get request will go inside the function

axios.get("https://api.vschool.io/simpfriedrice/todo")
    .then(response => console.log(response.data))
    .catch(error => console.log(error))



// Part 2 - POST
// The user can add new todos to their list. The new item should be 
// posted to the todo API so a future reload of the page will still display 
// that new todo item. Making the new todo appear without a refresh is extra credit, 
// but you're encouraged to attempt it.
// A user should be able to geive the item a title.
// A user should be able to give the item a price.
// A user should be able to give the item a description.
// A user should be able to attach an imgUrl to the item

const newTodo = {
    title: document.getElementById('toDoItem'),
    description: document.getElementsById('toDoItem').value //Literally just guessing here lol idk what to put fr and have no idea how to allow the user to attach an img wtf
}

axios.post("https://api.vschool.io/simpfriedrice/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

// Part 3 - PUT Part 1
// Each todo will have a checkbox where it can be marked complete or incomplete
// Checking the checkbox should update the database

// get one

// code goes here but idk if we put first or not lol brb

// put

axios.put("https://api.vschool.io/simpfriedrice/todo/<id>", {})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

// update


// Part 4 - DELETE
// A user will be able to delete todos (this is different from marking a todo as "completed")
// Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo


// get one

axios.get("https://api.vschool.io/simpfriedrice/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err))

// delete

const button = document.getElementById('delete-button')

button.addEventListener("click", function(){
    axios.delete("https://api.vschool.io/simpfriedrice/todo/<id>")
        .then(res => console.log(res))
        .catch(err => console.log(err))

});




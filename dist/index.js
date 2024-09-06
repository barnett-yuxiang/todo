import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import inquirer from "inquirer";
let todos = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true),
];
let collection = new TodoCollection("Adam", todos);
function displayTodoList() {
    console.clear();
    console.log(`${collection.userName}'s Todo List ` + `${collection.getItemCounts().incomplete} items to do`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
        badProperty: true,
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
// let newId: number = collection.addTodo("Go for run");
// let todoItem: TodoItem = collection.getTodoById(newId);
// todoItem.printDetails();
// collection.addTodo(todoItem);

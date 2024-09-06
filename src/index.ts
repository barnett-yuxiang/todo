import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import inquirer from "inquirer";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"),
  new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"),
  new TodoItem(4, "Call Joe", true),
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

function displayTodoList(): void {
  console.clear();
  console.log(`${collection.userName}'s Todo List ` + `${ collection.getItemCounts().incomplete } items to do`);
  collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
  Quit = "Quit"
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands),
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

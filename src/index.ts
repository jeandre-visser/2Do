import { v4 as uuidV4 } from "uuid";

// type props for Task
type Task = { 
  id: string, 
  title: string, 
  completed: boolean, 
  createdAt: Date 
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#task-form");
const input = document.querySelector<HTMLInputElement>("#task-title");
const tasks: Task[] = []

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if input is empty or null, if so, then return since user has not input any task yet
  if (input?.value == "" || input?.value == null) return;
  
  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  tasks.push(newTask);
  saveTasks();

  addListItem(newTask);
  input.value = ""
})

const addListItem = (task: Task) => {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks();
  })
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label)
  list?.append(item)
}

const saveTasks = () => {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

const loadTasks = (): Task[] => {
  const taskJson = localStorage.getItem("TASKS");
  if (taskJson == null) return [];
  return JSON.parse(taskJson)
}
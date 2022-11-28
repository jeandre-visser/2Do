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
const input = document.querySelector<HTMLInputElement>("#task-input");

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

  addListItem(newTask);
})

const addListItem = (task: Task) => {
  
}
// import { v4 as uuidV4 } from "uuid";

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector<HTMLFormElement>("#task-form");
const input = document.querySelector<HTMLInputElement>("#task-input");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  // Check if input is empty or null, if so, then return since user has not input any todo yet
  if (input?.value === "" || input?.value === null) return;
  
  const task = {
    
  }
})
import { Component, Input } from '@angular/core';
import { ToDoEntry } from '../models/ToDoModel';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.css']
})
export class ToDoPageComponent {

  placeholderName = 'Insert the Name!';
  
  placeholderTime = 'Select the Priority!';

  placeholderDescription = 'Insert an description!';

  createButton = 'Create!';

  isDisabled = true;

  isNotDisabled = false;

  isHidden = true;

  toDoList: Array<ToDoEntry> = [];

  name: string = '';
  time: string = '';
  description: string = '';


  createToDo = () => {
    const createToDoEntry =  new ToDoEntry();
    createToDoEntry.feld1 = this.name;
    createToDoEntry.feld2 =this.time;
    createToDoEntry.feld3 = this.description;
    this.toDoList.push(createToDoEntry);

    this.name = '';
    this.time = '';
    this.description = '';

    if(this.toDoList.length > 2){
      this.isNotDisabled = true;
    }
  }

  deleteEntry = (index: number) => {
    this.toDoList.splice(index, 1)
  }

  editEntry = () => {
    this.isDisabled = false;
    this.isHidden = false;
  }


  saveEntry = () => {
    this.isDisabled = true;
    this.isHidden = true;
  }


}


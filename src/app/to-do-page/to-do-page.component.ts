import { Component } from '@angular/core';
import { ToDoEntry } from '../models/ToDoModel';
import { RouterModule } from '@angular/router';

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

  toDoList: Array<ToDoEntry> = [];

  name: string = '';
  time: string = '';
  description: string = '';

  createToDo(){
    const createToDoEntry =  new ToDoEntry();
    createToDoEntry.feld1 = this.name;
    createToDoEntry.feld2 =this.time;
    createToDoEntry.feld3 = this.description;
    this.toDoList.push(createToDoEntry);

    this.name = '';
    this.time = '';
    this.description = ''; 
  }
  
    deleteEntry(index: number){
    this.toDoList.splice(index, 1)
  } 
}


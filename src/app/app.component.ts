import { Component } from '@angular/core';
import { ToDoEntry } from './models/ToDoModel';
import { TokenType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoProject';

  buttonDescription = 'Create!';

  isDisabled = true;

  toDoList: Array<ToDoEntry> = [];

  createToDo(feld1 : string, feld2 : string, feld3 : string){
    const createToDoEntry =  new ToDoEntry();
    createToDoEntry.feld1 = feld1;
    createToDoEntry.feld2 = feld2;
    createToDoEntry.feld3 = feld3;
    this.toDoList.push(createToDoEntry)
  }


  
  deleteEntry(index: number){
    this.toDoList.splice(index, 1)
  } 
}

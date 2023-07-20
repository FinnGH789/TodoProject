import { Component } from '@angular/core';
import { ToDoEntry } from './models/ToDoModel';
import { TokenType } from '@angular/compiler';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoProject';

  createButton = 'Create!';

  isDisabled = true;

  toDoList: Array<ToDoEntry> = [];

  feld1Value: string = '';
  feld2Value: string = '';
  feld3Value: string = '';

  createToDo(){
    const createToDoEntry =  new ToDoEntry();
    createToDoEntry.feld1 = this.feld1Value;
    createToDoEntry.feld2 =this.feld2Value;
    createToDoEntry.feld3 = this.feld3Value;
    this.toDoList.push(createToDoEntry);

    this.feld1Value = '';
    this.feld2Value = '';
    this.feld3Value = ''; 
  }
  
  deleteEntry(index: number){
    this.toDoList.splice(index, 1)
  } 
}

import { Component } from '@angular/core';
import { NewTaskComponent } from '../task/new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, NewTaskComponent,TaskComponent, TaskComponent, CdkDrag, CdkDropList],
  templateUrl: './to-do.component.html',

})
export class ToDoComponent {
  items = [{id:568, name:"Go to Bed"}, 
    {id:115, name:"Task 2"},
    {id:2447, name:"Task : Cook Something"}
  ]
  theme 
  light = {
    type: "Light",
    symbol: "\u263E"
  }
  Dark = {
    type: "Dark",
    symbol: "\u263C"
  }
  constructor(){
    this.theme = this.Dark;
  }

  setTheme(){

  }
  toggleTheme(){
    if(this.theme.type === "Light" )
      this.theme = this.Dark;
    else if (this.theme.type === "Dark")
      this.theme=this.light;
    
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }

}

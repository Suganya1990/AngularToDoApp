import { Component } from '@angular/core';
import { NewTaskComponent } from '../task/new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { TaskModule } from '../task/task.module';
import {Light, Dark} from '../theme/theme.module'

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, NewTaskComponent,TaskComponent, TaskComponent, CdkDrag, CdkDropList],
  templateUrl: './to-do.component.html',

})
export class ToDoComponent {
  tasks: TaskModule[] = [
    {
      id:"1",
      title:"Make doctors appointment ",
      description: new Date(),
      isComplete:false
      
    },
    {
      id:"2",
      title:"Finish Angular Project ",
      description: new Date(),
      isComplete:false
      
    },
    {
      id:"3",
      title:"Get a job",
      description: new Date(),
      isComplete:false
      
    },
    {
      id:"4",
      title:"Train for 5K",
      description: new Date(),
      isComplete:false
      
    },
    {
      id:"5",
      title:"Go swimming",
      description: new Date(),
      isComplete:false
      
    }
  ]
  theme!: typeof Light |  typeof Dark

  setInitialTheme(){
    let date = new Date();
    let time = date.getHours();
    if (typeof window !== "undefined") {
       if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         this.theme = Dark}
         else
         this.theme=Light
    }
    else{
      (time > 7 && time < 21 ) ? this.theme = Light : this.theme = Dark
    }
  }

  constructor(){    this.setInitialTheme()}

  ngOnInit(){

  }

  toggleTheme(){
    if(this.theme.type === "Light" )
      this.theme = Dark;
    else if (this.theme.type === "Dark")
      this.theme=Light;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

}

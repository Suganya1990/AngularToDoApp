import { Component } from '@angular/core';
import { NewTaskComponent } from '../task/new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { TaskModule } from '../task/task.module';
import {Light, Dark} from '../theme/theme.module'
import { TasksService } from '../task/tasks.service';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, NewTaskComponent,TaskComponent, TaskComponent, CdkDrag, CdkDropList],
  templateUrl: './to-do.component.html',

})
export class ToDoComponent {
  
  theme!: typeof Light |  typeof Dark
  tasks: TaskModule[] = []

  constructor(private taskService: TasksService){    
    this.setInitialTheme()
  }

  ngOnInit(){
   
    this.subscribeTasks()
    
  }

  subscribeTasks(){
   return this.taskService.getTasks().subscribe(task=>this.tasks = task)
  }
  setInitialTheme(){
    let date = new Date();
    let time = date.getHours();
    if (typeof window !== "undefined") {
       if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
         this.theme = Dark
         else
         this.theme=Light
    }
    else{
      (time > 7 && time < 21 ) ? this.theme = Light : this.theme = Dark
    }
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
  updateTask(e:any){
    this.taskService.updateStatus(e)
    
  }
  deleteTask(e:any){
    this.taskService.deleteTask(e)
  }
  clearCompletedTasks(){
  this.tasks =  this.tasks.filter((t)=>
    t.isComplete ==false
  )
  }
}

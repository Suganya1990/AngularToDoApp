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

  constructor(private taskService: TasksService){    
    this.setInitialTheme()
  }

  ngOnInit(){
    this.getTasks()
    
  }
  getTasks(){
   return this.taskService.getTasks().subscribe(task=>this.tasks = task)
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
    const tasks = this.taskService.getTasks();

  }
  deleteTask(e:any){
    console.log("delete task event")
    this.taskService.deleteTask(e)
  }

}

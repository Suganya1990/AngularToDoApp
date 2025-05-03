import { Injectable } from '@angular/core';
import { TaskModule } from './task.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  tasks: TaskModule[] = [
      {
        id:"1",
        title:"Make doctors appointment ",
        date: new Date(),
        isComplete:false
        
      },
      {
        id:"2",
        title:"Finish Angular Project ",
        date: new Date(),
        isComplete:false
        
      },
      {
        id:"3",
        title:"Get a job",
        date: new Date(),
        isComplete:false
        
      },
      {
        id:"4",
        title:"Train for 5K",
        date: new Date(),
        isComplete:false
        
      },
      {
        id:"5",
        title:"Go swimming",
        date: new Date(),
        isComplete:false
      }
    ]

  constructor() { }

  addTask( title:string, task?:TaskModule){
    if(title)
    {
      let tempTask: TaskModule = {
      id: (this.tasks.length + 1).toString(),
      title: title,
      date: new Date, 
      isComplete:false
      }
      this.tasks.push(tempTask)
  }
  (task)?this.tasks.push(task): this.tasks
}
  getTasks():Observable<TaskModule[]>{
    const tasks = of(this.tasks)
    return tasks
  }

  updateStatus(id:string){
  this.tasks.map(t=>{
      t.id ===id ? {...t, isComplete:true}:t
    })
  }
  

}

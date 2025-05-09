import { Injectable, Input, OnInit } from '@angular/core';
import { TaskModule } from './task.module';
import { Observable, of } from 'rxjs';
import {TASKDATA } from './tasksItem'

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit {
  
  tasks: TaskModule[] = TASKDATA;
  idTracker:string = '';
 

  constructor() {    
    this.idTracker = (this.tasks.length + 1).toString()
}


ngOnInit(){
   }

addTask( title:string, task?:TaskModule){
  let tempTask: TaskModule = {
    id: this.idTracker,
    title: title,
    date: new Date, 
    isComplete:false
    }
    if(title)
      this.tasks.push(tempTask)
    if (task)
      this.tasks.push(task)
    this.idTracker = (Number(this.idTracker)+1).toString();
}

getTasks():Observable<TaskModule[]>{
    const tasks = of(this.tasks)
    return tasks
  }

setTasks(tasks:any){
    this.tasks=tasks    
  }


updateStatus(id:string){
  this.tasks.map(t=>{
      if(t.id ===id )
         {
          t.isComplete = !t.isComplete
    }
    })
  }
  
  deleteTask(id:string){
    const taskIndex = this.tasks.findIndex((t) => t.id == id);    
     this.tasks.splice(taskIndex, 1);
  }

filterTasks(status:string){
  let tempArray:any;
  if(status==="Completed"){
   tempArray =   this.tasks.filter(t=>t.isComplete===true)
  }
  if(status==='Active'){
  tempArray  =  this.tasks.filter(t=>t.isComplete===false)
  }
  if(status==='All'){
   tempArray =  this.tasks
   }
   return tempArray
}
}


import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskModule } from '../task.module';
import { TasksService } from '../tasks.service';
import { FormsModule } from '@angular/forms';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'new-task',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './new-task.component.html',

})
export class NewTaskComponent {
  tasks?: TaskModule
  title = ""


  constructor(private taskService:TasksService){

  }


  addTask(e:Event){
    this.taskService.addTask(this.title)
    this.title = ''
  }

  
}

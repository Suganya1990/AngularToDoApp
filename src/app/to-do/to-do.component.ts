import { Component } from '@angular/core';
import { NewTaskComponent } from '../task/new-task/new-task.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [NewTaskComponent,TaskComponent, TaskComponent],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

}

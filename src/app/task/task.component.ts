import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskModule } from './task.module';
@Component({
  selector: 'task',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task.component.html',

})
export class TaskComponent implements OnInit {
  @Input({required:true}) task?:TaskModule
  constructor(){
  
  }
  ngOnInit(): void {

  }


}

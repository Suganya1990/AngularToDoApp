import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() completeTaskEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteTaskEvent: EventEmitter<string> = new EventEmitter<string>();
  
  constructor(){
  }

  ngOnInit(): void {
  }

  onComplete( e:string){
    this.completeTaskEvent.emit(e)
  }

  onDelete(e:string){
    this.deleteTaskEvent.emit(e)
  }

}

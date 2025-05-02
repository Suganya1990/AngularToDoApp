import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'task',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task.component.html',

})
export class TaskComponent implements OnInit {
  @Input({required:true}) task?:{
    id:number,
    name: string 
  }
  constructor(){
  
  }
  ngOnInit(): void {
    console.log(this.task)
  }


}

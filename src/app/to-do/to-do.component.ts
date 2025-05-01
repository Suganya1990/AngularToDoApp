import { Component } from '@angular/core';
import { NewTaskComponent } from '../task/new-task/new-task.component';
import { TaskComponent } from '../task/task.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, NewTaskComponent,TaskComponent, TaskComponent],
  templateUrl: './to-do.component.html',

})
export class ToDoComponent {
  theme 
  light = {
    type: "Light",
    symbol: "\u263E"
  }
  Dark = {
    type: "Dark",
    symbol: "\u263C"
  }
  constructor(){
    this.theme = this.Dark;
  }

  setTheme(){

  }
  toggleTheme(){
    if(this.theme.type === "Light" )
      this.theme = this.Dark;
    else if (this.theme.type === "Dark")
      this.theme=this.light;
    
  }

}

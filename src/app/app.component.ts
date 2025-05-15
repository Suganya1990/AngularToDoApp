import { afterNextRender, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  title = 'todo-app';
  constructor(){
    // afterNextRender(()=>{
    //   this.showWelcomeMessage();
    // })
   
  }

  showWelcomeMessage() {
    alert("Thank you for visiting! This app is currently in development.");
  }
  
}

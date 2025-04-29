import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'new-task',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './new-task.component.html',

})
export class NewTaskComponent {
  // faCircle = faCircle
}

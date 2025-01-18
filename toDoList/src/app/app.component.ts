import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoWrapperComponent } from './to-do-wrapper/to-do-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ToDoWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toDoList';
}

import { Component , Output , EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-to-do-form',
  imports: [FormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {

@Output() sendToWrapper = new EventEmitter<string>();

taskToWrapper(task:string){
  if (task.trim() === '') {
    alert('Task cannot be empty!');
    return;
  }
  this.sendToWrapper.emit(task);
}


}

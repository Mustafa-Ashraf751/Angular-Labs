import { Component , Input ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() tasksInput : {id:string,title:string,isComplete:boolean}[] = [];

  @Output() sendToWrapper = new EventEmitter<string>();

  @Output() complete = new EventEmitter<string>();

  taskToWrapper(id:string){
   this.sendToWrapper.emit(id);
  }

  completeTask(id:string){
   this.complete.emit(id);
  }

}

import { Component } from '@angular/core';
import { ToDoFormComponent } from '../to-do-form/to-do-form.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';


@Component({
  selector: 'app-to-do-wrapper',
  imports: [ToDoFormComponent,ToDoListComponent],
  templateUrl: './to-do-wrapper.component.html',
  styleUrl: './to-do-wrapper.component.css'
})
export class ToDoWrapperComponent {
   tasks : {id:string,title:string,isComplete:boolean}[] = [];

   receiveFromForm(task:string){
      this.tasks.push({
        id:this.generateRandomId(),
        title:task,
        isComplete:false
      });
      console.log(this.tasks);
   }

   deleteTask(taskId:string){
      this.tasks = this.tasks.filter((t)=>t.id != taskId);
    }

    completeTask(taskId:string){
       this.tasks.filter((t)=>t.id == taskId).map(
        (task)=>{
          if(task.isComplete) task.isComplete = false;
          else task.isComplete = true
        }

      );
    }

    generateRandomId() {
      return Date.now().toString(36);
    }

}

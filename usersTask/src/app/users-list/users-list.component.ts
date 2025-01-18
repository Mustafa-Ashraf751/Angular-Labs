import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import data from '../users.json';

@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {

users = data;

isButtonClicked : boolean = false;

userFound : any[] = [];

  filterUsers(email : any) {
  this.isButtonClicked = true;
  this.userFound = this.users.filter((user)=>user.email==email);
}

 resetSearch(){
  this.isButtonClicked = false;
  this.userFound = [];
 }

 clearField(field : any){
    field.value = '';
 }

}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './product-login.component.html',
  styleUrl: './product-login.component.css'
})
export class ProductLoginComponent {

  FormsValues = {
     email:'',
     password:''
  }

  onSubmit(form:any){
    console.log(form);
    console.log(form.value);
  }

}

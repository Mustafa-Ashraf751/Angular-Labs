import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-register',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './product-register.component.html',
  styleUrl: './product-register.component.css'
})
export class ProductRegisterComponent {
    UserForm : FormGroup;

    constructor(private fb: FormBuilder){

      this.UserForm = this.fb.group({
         name : ['',[Validators.required,Validators.minLength(3)]],
         email:['',[Validators.email,Validators.required]],
         username:['',[Validators.required,Validators.minLength(10)]],
         password:['',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$")]],
         confirmPassword:['',[Validators.required]]
      },
      {validators: this.passwordConfirmCheck.bind(this)})

    }

    passwordConfirmCheck(control: AbstractControl): ValidationErrors | null {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      return password === confirmPassword ? null : { passwordMismatch: true };
    }

    get formControls() {
      return this.UserForm.controls;
    }



    onSubmit() {
      this.UserForm.markAllAsTouched();
      console.log(this.UserForm);
  }

}

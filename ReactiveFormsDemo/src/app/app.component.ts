import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveFormsDemo';

  userForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  signIn():void{
    console.log(this.userForm);
    console.log(this.userForm.value);
    console.log(this.userForm.get('userName').value);
    console.log(this.userForm.get('password').value);
  }
}

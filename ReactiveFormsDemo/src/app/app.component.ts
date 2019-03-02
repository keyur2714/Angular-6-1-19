import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from './user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveFormsDemo';

  user: User = new User();
  isSubmitted:boolean = false;
  
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){    
  }

   userForm = new FormGroup({
     userName: new FormControl('',[
       Validators.required,
       Validators.pattern('^[a-z]+[A-Z]+[0-9]+[@0-9]$')
       ]
       ),
     password: new FormControl('',[Validators.required,
       Validators.minLength(6)]
       )
   });

  signIn():void{
    console.log(this.userForm);
    console.log(this.userForm.value);
    console.log(this.userForm.get('userName').value);
    console.log(this.userForm.get('password').value);
    if(this.userForm.valid){
      this.isSubmitted = true;
      this.user = this.userForm.value;
    }else{
      this.isSubmitted = false;
    }
  }

  updateValidations(){    
    if(this.userForm.get('userName').value === 'adminA1@'){
      alert(this.userForm.get('userName').value);
      this.userForm.get('password').setValidators(Validators.required);      
    }else{
      this.userForm.get('password').setValidators([Validators.required,Validators.minLength(6)]);
    }
    this.userForm.updateValueAndValidity();
  }
}

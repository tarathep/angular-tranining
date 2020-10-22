import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CommonValidator } from 'src/app/validators/common-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //FormGrop, FormArry , FormControl
  form: FormGroup;
 
  constructor(private fb: FormBuilder,private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    //original form binding
    // this.form = new FormGroup({
    //   login: new FormControl(''),
    //   password: new FormControl('')
    // });


    //using lib FormBuilder
    this.form = this.fb.group({
      login: ['',[Validators.required]],
      password: ['',[CommonValidator.password]]
    });
  }

  login(): void{
    this.authService.login(this.form.value).subscribe({
      next: (result)=>{
        //auth pass
        alert(result.token);
        this.router.navigate(['admin'])
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }

}

import { Route } from '@angular/compiler/src/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Token } from 'src/app/models/token';
import { AuthService } from 'src/app/services/auth.service';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  let authService: AuthService;
  let router : Router


  beforeEach(()=>{
    let token: Token = {
      token: 'mocked token'
    }

    authService = new AuthService(null);
    spyOn(authService,"login").and.returnValue(of(token))

  });
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: authService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login success when user and pwd is vaild',()=>{
    const loginTxt = fixture.debugElement.query(By.css('#logintxt')).nativeElement as HTMLInputElement;
    const passwordTxt = fixture.debugElement.query(By.css('#passwordtxt')).nativeElement as HTMLInputElement;
  
    loginTxt.value = 'username';
    loginTxt.dispatchEvent(new Event('input'));
    passwordTxt.value = 'password';
    passwordTxt.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const loginBtn = fixture.debugElement.query(By.css('#loginbtn')).nativeElement as HTMLElement;
    loginBtn.click();
    fixture.detectChanges();

    expect(authService.login).toHaveBeenCalledWith({login:'username',password:'password'});
  })

  it('should call login success when user and pwd is empty',()=>{
    const loginTxt = fixture.debugElement.query(By.css('#logintxt')).nativeElement as HTMLInputElement;
    const passwordTxt = fixture.debugElement.query(By.css('#passwordtxt')).nativeElement as HTMLInputElement;
  
    loginTxt.value = '';
    loginTxt.dispatchEvent(new Event('input'));
    passwordTxt.value = '';
    passwordTxt.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const loginBtn = fixture.debugElement.query(By.css('#loginbtn')).nativeElement as HTMLElement;
    loginBtn.click();
    fixture.detectChanges();

    expect(authService.login).not.toHaveBeenCalled();
  })

  it('should call login success when pwd is less then 3',()=>{
    const loginTxt = fixture.debugElement.query(By.css('#logintxt')).nativeElement as HTMLInputElement;
    const passwordTxt = fixture.debugElement.query(By.css('#passwordtxt')).nativeElement as HTMLInputElement;
  
    loginTxt.value = 'username';
    loginTxt.dispatchEvent(new Event('input'));
    passwordTxt.value = '12';
    passwordTxt.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const loginBtn = fixture.debugElement.query(By.css('#loginbtn')).nativeElement as HTMLElement;
    loginBtn.click();
    fixture.detectChanges();

    expect(authService.login).not.toHaveBeenCalled();
  })

});

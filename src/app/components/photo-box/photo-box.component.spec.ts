import { R3BoundTarget } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Member } from 'src/app/models/member';

import { PhotoBoxComponent } from './photo-box.component';

fdescribe('PhotoBoxComponent', () => {
  //change PhotoBoxComponent to HostCommponent
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //add import for test Router
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'member/:id', component: MockRouterComponent }
        ])
      ],
      declarations: [ PhotoBoxComponent,HostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render photo-box with detail correctly', () => {
    const img = fixture.debugElement.query(By.css('.card-img')).nativeElement as HTMLElement;
    const text = fixture.debugElement.query(By.css('.card-text')).nativeElement as HTMLElement;

    expect(img.getAttribute('src')).toEqual('mock_img');
    expect(text.innerText).toEqual('mock name');
  });


  it('should redirect to member detail page when click at photo-box', fakeAsync(()=>{
    const photoBox = fixture.debugElement.query(By.css('div')).nativeElement as HTMLElement;
    photoBox.click();
    tick(50);
    expect(router.url).toEqual('/member/1');
  }));
});


//CREATE MOCK COMPONENTS
@Component({
  selector: 'host-component',
  template: '<app-photo-box [member]="mockMember"></app-photo-box>'
})
class HostComponent{
  //mock member
  mockMember: Member = {
    _id: '1',
    name: 'mock name',
    imgUrl: 'mock_img',
    instagramId: 'mock ins id'
  };
}

@Component({
  selector: 'mock-router-component',
  template: '<div></div>'
})
class MockRouterComponent{}
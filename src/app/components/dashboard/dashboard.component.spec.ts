import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

import { DashboardComponent } from './dashboard.component';

// start with f function execute test when isn't use wil be deleted ex. when execute by CI Jenkins
fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  //declare MemberService
  let memberService: MemberService;

  //initialze mock
  beforeEach(()=>{
    const members: Member[] = [{
      _id: '1',
      name: 'mock name',
      imgUrl: 'mock_img',
      instagramId: 'mock ins id'
    },{
      _id: '2',
      name: 'mock name2',
      imgUrl: 'mock_img',
      instagramId: 'mock ins id'
    }]

    //inject mock params null return member list mock
    //gernaral service func param input HTTPClient
    memberService = new MemberService(null);
    spyOn(memberService,"getMembers").and.returnValue(of(members));
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //used 2 components must prepared declare
      declarations: [ DashboardComponent,MockPhotoBox ],
      //prepare for test gen component
      providers:[{
        provide: MemberService,
        useValue: memberService
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //test case 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //test case 
  it('should call getMembers service', ()=>{
    //will call Oninit func automatically
    expect(memberService.getMembers).toHaveBeenCalled();
  });

  //test case for ngfor loop html, is focus render front div id member has values by mock
  it('should render photo-box by members gotten by api', ()=>{
    const member1 = fixture.debugElement.query(By.css('#member-1'));
    expect(member1).toBeTruthy();
    const member2 = fixture.debugElement.query(By.css('#member-2'));
    expect(member2).toBeTruthy();
  })


});

@Component({
  selector: 'app-photo-box',
  template: '<div id="member-{{member._id}}"></div>'
})

class MockPhotoBox{
  @Input()
  member: Member;
}
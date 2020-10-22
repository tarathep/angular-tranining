import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

import { MemberDetailComponent } from './member-detail.component';

describe('MemberDetailComponent', () => {
  let component: MemberDetailComponent;
  let fixture: ComponentFixture<MemberDetailComponent>;

  //declare component using
  let memberService: MemberService;
  let activitedRoute: any;

  //prepare data for retrun mock
  beforeEach(()=>{
    let member: Member = {
      _id: '1',
      name: 'mock name',
      imgUrl: 'mock_img',
      instagramId: 'mock ins id'
    }

    //inject mock retrun member mock
    memberService = new MemberService(null);
    spyOn(memberService,"getMemberByID").and.returnValue(of(member))
    
    
    //this.route.snapshot.paramMap.get('id')
    activitedRoute = {
      snapshot:{
        paramMap:{
          get: () => {
            return '1';
          }
        }
      }
    };
    
  });


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDetailComponent ],
      //setup provider 
      providers: [
        { provide: activitedRoute,useValue: activitedRoute},
        { provide: MemberService,useValue:memberService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TEST CASEs
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get memeber by given memberId',()=>{
    expect(memberService.getMemberByID).toHaveBeenCalledWith('1');
  });

  it('should render member detail correctly',()=>{
    let img = fixture.debugElement.query(By.css('#member-img')).nativeElement as HTMLElement;
    let name = fixture.debugElement.query(By.css('#member-name')).nativeElement as HTMLInputElement;
    let imgUrl = fixture.debugElement.query(By.css('#member-img-url')).nativeElement as HTMLInputElement;
    let igId = fixture.debugElement.query(By.css('#member-instagram-id')).nativeElement as HTMLInputElement;

    expect(img.getAttribute('src')).toEqual('mock_img');
    expect(name.value).toEqual('mock name');
    expect(imgUrl.value).toEqual('mock_img');
    expect(igId.value).toEqual('mock ins id');
  })
});

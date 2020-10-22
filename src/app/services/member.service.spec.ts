import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MemberService } from './member.service';

fdescribe('MemberService', () => {
  let service: MemberService;
  let httpClient: HttpClient;

  beforeEach(()=>{
    httpClient = new HttpClient(null);
    spyOn(httpClient,"get").and.returnValue(of(null))
    service = new MemberService(httpClient);
  });

  it('should be created',()=>{
    expect(service).toBeTruthy();
  })

  describe('getMembers',()=>{
    it('should call http get with valid url',(done) =>{
      service.getMembers().subscribe(()=>{
        expect(httpClient.get).toHaveBeenCalledWith(`${environment.apiUrl}/bnk/members`);
        done();
      })
    })
  })

  describe('getMembers',()=>{
    it('should call http get with valid url',(done) =>{
      service.getMemberByID('1').subscribe(()=>{
        expect(httpClient.get).toHaveBeenCalledWith(`${environment.apiUrl}/bnk/members/1`);
        done();
      })
    })
  })


  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(MemberService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});

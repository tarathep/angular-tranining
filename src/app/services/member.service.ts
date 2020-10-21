import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  //inject params
  constructor(private httpClient: HttpClient) { }

  //declare method get to backend api :3000
  getMembers(): Observable<Member[]>{
    return this.httpClient.get<Member[]>(`${environment.apiUrl}/bnk/members`);
  }
}

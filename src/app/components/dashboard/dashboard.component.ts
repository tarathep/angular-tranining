import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //isRequired: boolean;

  members: Member[] = [];

  constructor(private memberService: MemberService ) { 
  }

  //ref Oninit
  ngOnInit(): void {
    this.memberService.getMembers().subscribe((members)=>{
      this.members = members;
    });
  }

}

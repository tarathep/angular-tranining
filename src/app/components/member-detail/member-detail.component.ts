import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {

  @Input()
  member : Member;

  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    

    this.memberService.getMemberByID(id).subscribe((member)=>{
      this.member = member;

      console.log(member);
    });
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-photo-box',
  templateUrl: './photo-box.component.html',
  styleUrls: ['./photo-box.component.scss']
})
export class PhotoBoxComponent implements OnInit {


  @Input()
  member : Member;

  constructor() { }

  
  ngOnInit(): void {
  }

}

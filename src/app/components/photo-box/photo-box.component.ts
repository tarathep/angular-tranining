import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-photo-box',
  templateUrl: './photo-box.component.html',
  styleUrls: ['./photo-box.component.scss']
})
export class PhotoBoxComponent implements OnInit {

  constructor() { }

  member : Member = {
    _id: "1",
    name: "Cherprang",
    imgUrl: "https://i.ytimg.com/vi/6crAs7KLWl8/maxresdefault.jpg",
    instagramId: "cherprang.bnk48official"
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lession2',
  templateUrl: './lession2.component.html',
  styleUrls: ['./lession2.component.css']
})
export class Lession2Component implements OnInit {
  public title: string = "lession 2 - Property - Attribute - Class - Style Binding";
  public imgSrc: string = "https://picsum.photos/200";
  public btn = {
    value: "Click",
    type: "submit",
    disabled: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}

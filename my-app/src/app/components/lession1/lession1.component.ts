import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lession1',
  templateUrl: './lession1.component.html',
  styleUrls: ['./lession1.component.css']
})
export class Lession1Component implements OnInit {
  public title: string = "lession 1 - Interpolation";
  public imgSrc: string = "https://picsum.photos/200";
  public name: string = "Tiến Đạt";
  constructor() { }

  ngOnInit(): void {
  }

  showName(): string {
    return `${this.name}`;
  }

}

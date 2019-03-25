import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-regist',
  templateUrl: './book-regist.component.html',
  styleUrls: ['./book-regist.component.css']
})
export class BookRegistComponent implements OnInit {

  author: string;
  titile: string;
  image: string;
  bookSeq: string;

  constructor() { }

  ngOnInit() {
  }

}

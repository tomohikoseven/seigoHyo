import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public searchStr: string;
  public result: string;
  public bookList: Array<{title:string}>;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.result = this.searchStr;
    this.bookList = [{title:'タイトル1'},{title:'タイトル2'}];
    console.log('test');
  }

}

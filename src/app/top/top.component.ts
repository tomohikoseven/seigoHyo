import { Component, OnInit } from '@angular/core';

class BookInfo {
  //image: string;
  //bookSeq:string;
  //title: string;
  //author: string;
  constructor( public image: string
               ,public bookSeq: string
               ,public title: string
               ,public author: string ){

  }
}

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public searchStr: string;
  public result: string;
  public bookList: Array<BookInfo>;

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.result = this.searchStr;
    this.bookList = [
        new BookInfo('image1', 'seq1', 'タイトル1', '著者A')
        ,new BookInfo('image2', 'seq2', 'タイトル2', '著者B')
    ];
    console.log('test');
  }

}

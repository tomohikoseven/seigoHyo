import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

class Book {
  //image: string;
  //bookSeq:string;
  //title: string;
  //author: string;
  constructor( public image: string = "default image"
               ,public bookSeq: string = "default bookSeq"
               ,public title: string   = "default title"
               ,public author: string = "default author"){

  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public bookCollection: AngularFirestoreCollection<Book>;
  bookList: Observable<Book[]>;
  bookInfo1: Book;

  constructor( private db: AngularFirestore ) { }

  ngOnInit() {
  }

  search() {
    console.log("search");
    this.bookList = this.db.collection<Book>('books').valueChanges();
    //this.bookCollection = this.db.collection<Book>('books', ref => ref);
    //this.bookInfo1 = this.db.collection("books").doc<Book>("first").valueChanges();
    //this.bookList =  [ this.bookInfo1 ] ;
    //this.bookList = this.db.collection<Book>('books');
    /*
    this.bookList = [
      new Book()
        ,new Book('image2', 'seq2', 'タイトル2', '著者B')
    ];
    */
  }

}

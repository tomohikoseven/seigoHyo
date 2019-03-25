import { Component, OnInit } from '@angular/core';
import { Comment, User } from '../class/chat';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加
import { firebase } from 'firebaseui-angular';

// Service
import { LoginService } from '../services/login.service';

const CURRENT_USER: User = new User(1, 'Tanaka Jiro');
const ANOTHER_USER: User = new User(2, 'Suzuki Taro');
const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'Suzukiの１つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの１つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの2つ目のコメントです。')
];


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
  item: Observable<Comment>; // 追加
  public content = '';
  public comments = COMMENTS;
  public current_user = CURRENT_USER;

  public searchStr: string;
  public result: string;
  public bookList: Array<BookInfo>;

  public userCollection: AngularFirestoreCollection<User>;
  public users: Observable<User[]>;

 // public loginUser: Observable<firebase.User>;

  // DI（依存性注入する機能を指定）
  constructor(private db: AngularFirestore
             ,private loginService: LoginService) {
    this.item = db
      .collection('comments')
      .doc<Comment>('item')
      .valueChanges();
 //   this.loginUser = this.loginService.user;
  }

  ngOnInit() {
     this.userCollection = this.db.collection<User>('users');
     let users = this.userCollection.valueChanges();
  }

  show() {
    this.result = this.searchStr;
    this.bookList = [
        new BookInfo('image1', 'seq1', 'タイトル1', '著者A')
        ,new BookInfo('image2', 'seq2', 'タイトル2', '著者B')
    ];
  }

  // 新しいコメントを追加
  addComment(comment: string) {
     if (comment) {
       this.comments.push(new Comment(this.current_user, comment));
       this.content = '';
     }
  }

}

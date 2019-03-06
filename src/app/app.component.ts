import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { Comment, User } from './class/chat';
import { AngularFirestore } from '@angular/fire/firestore'; // 追加
import { Observable } from 'rxjs'; // 追加

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: Observable<Comment>; // 追加
  public content = '';
  public comments = COMMENTS;
  public current_user = CURRENT_USER;
  title = 'scrollFooter';

// DI（依存性注入する機能を指定）
  constructor(db: AngularFirestore) {
    this.item = db
      .collection('comments')
      .doc<Comment>('item')
      .valueChanges();
    setTheme('bs4');
  }

  // 新しいコメントを追加
  addComment(comment: string) {
     if (comment) {
       this.comments.push(new Comment(this.current_user, comment));
     }
  }
}

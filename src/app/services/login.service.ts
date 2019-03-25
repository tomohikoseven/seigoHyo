import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// library
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user: Observable<firebase.User>;

  constructor( private angularFireAuth: AngularFireAuth ) { 
    this.user = this.angularFireAuth.authState;
  }

  ngOnInit() {
    console.log('ngOnInit');
    //this.user = this.angularFireAuth.authState;
  }

  //  ログアウト
  async logout() {
    this.angularFireAuth.auth.signOut();
  }
}

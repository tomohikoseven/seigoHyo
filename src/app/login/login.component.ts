import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor( private angularFireAuth: AngularFireAuth ) { }

  ngOnInit() {
    this.user = this.angularFireAuth.authState;
  }

  // ログアウト
  async logout() {
    this.angularFireAuth.auth.signOut();
  }

  successCallback( signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
  }

  async errorCallback( errorData:FirebaseUISignInFailure ) {
    console.log(errorData);
  }

}

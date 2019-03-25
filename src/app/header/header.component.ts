import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// library
import { AngularFireAuth } from '@angular/fire/auth';

// Service
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //user: Observable<firebase.User>;

  constructor( private angularFireAuth: AngularFireAuth
              ,public loginService: LoginService ) { 
  }

  ngOnInit() {
    //this.user = this.angularFireAuth.authState;
    //this.user = this.loginService.user;
  }

  // ログアウト
  async logout() {
    //this.angularFireAuth.auth.signOut();
    this.loginService.logout();
  }

  /*
  successCallback( signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
  }

  async errorCallback( errorData:FirebaseUISignInFailure ) {
    console.log(errorData);
  }
  */
}

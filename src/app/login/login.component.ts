import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { FirebaseUISignInSuccessWithAuthResult, FirebaseUISignInFailure } from 'firebaseui-angular';
import { AuthProvider } from 'ngx-auth-firebaseui';

// Service
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //user: Observable<firebase.User>;
  providers = AuthProvider;

  constructor( private angularFireAuth: AngularFireAuth
              ,public loginService: LoginService  ) { }

  ngOnInit() {
  //  this.user = this.loginService.user;
  }

  // ログアウト
  logout() :void {
    this.loginService.logout();
  }

  successCallback( signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    console.log(signInSuccessData);
  }

  async errorCallback( errorData:FirebaseUISignInFailure ) {
    console.log(errorData);
  }

}

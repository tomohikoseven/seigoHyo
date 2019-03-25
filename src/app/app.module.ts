import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; // 追加
import { AngularFireModule } from '@angular/fire'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
//import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加
//import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular'; // 追加
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { TopComponent } from './top/top.component';
import { ChatDatePipe } from './pipe/chat-date.pipe';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

// Service
import { LoginService } from './services/login.service';
import { AccountComponent } from './account/account.component';
import { BookRegistComponent } from './book-regist/book-regist.component';

/*
const firebaseUiAuthConfig: firebaseui.auth.Config = {
  autoUpgradeAnonymousUsers: true, // 匿名認証ユーザー自動アップグレード
  signInFlow: 'redirect', // redirect or popup
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'aaa',
  privacyPolicyUrl: 'https://www.msn.com/ja-jp',
  signInSuccessUrl: 'http://localhost:4200/',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  siteName: 'my-app', 
};
*/


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopComponent,
    ChatDatePipe,
    LoginComponent,
    AccountComponent,
    SearchComponent,
    BookRegistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFirestoreModule,
    //AngularFireAuthModule,  // angularfireのAuth用モジュール
    //FirebaseUIModule.forRoot(firebaseUiAuthConfig), // FirebaseUIのモジュール
    //NgbModule.forRoot(),
    // Specify the ngx-auth-firebaseui library as an import
    NgxAuthFirebaseUIModule.forRoot(environment.firebase)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

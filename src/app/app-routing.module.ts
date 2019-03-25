import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';
import { BookRegistComponent } from './book-regist/book-regist.component';

const routes: Routes = [
	{ path: '', component: TopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'search', component: SearchComponent },
  { path: 'book-regist', component: BookRegistComponent },
  { path: '**', component: TopComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }

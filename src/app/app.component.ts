import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrollFooter';

// DI（依存性注入する機能を指定）
  constructor() {
    setTheme('bs4');
  }

}

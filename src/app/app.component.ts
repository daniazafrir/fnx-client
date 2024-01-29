import { Component, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthObject } from './models/auth';
import { SearchApiService } from './services/search-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  readonly authService = inject(SearchApiService)
  readonly auth$ = new BehaviorSubject<AuthObject|null>(null);

  constructor(){
    this.authService.auth().subscribe(i=>{
      localStorage.setItem('access_token', i.token);
    })

  } 
  
}

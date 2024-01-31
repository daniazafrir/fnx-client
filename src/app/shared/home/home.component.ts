import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { Subject,debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  standalone: true,
  imports:[GalleryComponent,TuiInputModule, FormsModule], 
})
export class HomeComponent{
    search:string = ''
    $search: Observable<string> |undefined;
    searchUpdate = new Subject<string>();
    constructor() {
      // Debounce search.
     this.$search =  this.searchUpdate.pipe(
        debounceTime(300),
        distinctUntilChanged())
        
    }
 
}

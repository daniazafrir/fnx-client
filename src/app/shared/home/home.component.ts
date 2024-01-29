import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  standalone: true,
  imports:[GalleryComponent,TuiInputModule, FormsModule],
})
export class HomeComponent{
    search = '';

 
}

import { Component, Input, OnInit } from '@angular/core';
import { inject, Injectable } from '@angular/core';
import { DataResult, GitRepoItem } from '../../models/git-repo-item';
import { SearchApiService } from '../../services/search-api.service';
import {map, Observable, tap} from 'rxjs';
import { GalleryStore } from '../../stores/gallery-store';
import { TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiLoaderModule, TuiRootModule } from '@taiga-ui/core';
import { TuiCarouselModule, TuiIslandModule, TuiMarkerIconModule, TuiPaginationModule } from '@taiga-ui/kit';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less'],
  standalone: true,
  imports:[
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiPaginationModule,
    TuiIslandModule,
    TuiCarouselModule,
    TuiButtonModule,
    TuiLoaderModule,
    TuiMarkerIconModule,
    HttpClientModule ,
    NgOptimizedImage,
    NgForOf,
    AsyncPipe
    
  ]
})
export class GalleryComponent  {

  readonly searchService = inject(SearchApiService);
  readonly galleryStore = inject(GalleryStore);

  @Input() set searchKey(value: string) {  
    if(value.length > 0)  
      this.result$ = this.searchService.searchRepositories(value) 
  }

  constructor() { }
  result$ :Observable<DataResult<GitRepoItem>> | undefined;
  
  
  addToFavs(item:GitRepoItem):void{
    this.galleryStore.updateSelectedGalleryItems({id:item.id,isFavourite:true})
  }

  isFavourite(id: number): Observable< boolean> {
    return this.galleryStore.vm$.pipe(
      map ((x)=> {
        return !!x.currentItems.find(item => item.id === id)}),
      tap((t) => {console.log(t); return t;})
        );
    }
    readonly appearance = 'primary' 

}

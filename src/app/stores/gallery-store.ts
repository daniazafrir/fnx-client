import { Injectable } from '@angular/core';
import {ComponentStore, tapResponse} from '@ngrx/component-store';
export interface GalleryState {
    currentItems:GalleryItem[];
}
export interface GalleryItem {
    isFavourite:boolean;
    id: number;
}
const initialState: GalleryState = {
    currentItems: []
};

@Injectable()
export class GalleryStore extends ComponentStore<GalleryState>{
    constructor(){
        super(initialState);
    }
    readonly vm$ = this.select(
        ({currentItems}) => ({
            currentItems
        }),
    );


    readonly updateSelectedGalleryItems = this.updater<GalleryItem>(
        (state, interest: GalleryItem) => {
            const {currentItems: mutableCurrentUserInterests} = state;

            const interestIdx = mutableCurrentUserInterests?.findIndex(
                ({id}) => id === interest.id,
            );
            return {
                ...state,
                currentItems:
                    interestIdx >= 0
                        ? [
                              ...mutableCurrentUserInterests.filter(
                                  item => interest.id !== item.id,
                              ),
                          ]
                        : [...mutableCurrentUserInterests, interest],
            };
        },
    );

}

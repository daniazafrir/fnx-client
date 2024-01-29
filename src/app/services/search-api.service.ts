import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { DataResult, GitRepoItem } from '../models/git-repo-item';
import { AuthObject } from '../models/auth';
@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  readonly http = inject(HttpClient);

  readonly suffix = "api"
  searchRepositories(searchKey: string): Observable<DataResult<GitRepoItem>> {
    return this.http.get<DataResult<GitRepoItem>>(
        `${environment.apiUrl}/search?searchKey=${searchKey}`,
    );
 
  }
  auth(): Observable<AuthObject> {
    return this.http.get<AuthObject>(
        `${environment.apiUrl}/auth`,
    );
  }


}

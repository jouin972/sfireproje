import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, Observable } from 'rxjs';

import { environment } from '@environments/environment';
import { JokeModel } from '@app/models';

@Injectable()
export class JokeService {
  private APIEndPoint: string = environment.API_BASE_URL;

  private searchSource = new Subject<string>();
  public searchString$ = this.searchSource.asObservable();

  private goingToDetailPageSource = new Subject<boolean>();
  public goingToDetailPage$ = this.goingToDetailPageSource.asObservable();

  constructor(private httpClient: HttpClient) {}

  public getRandomJokes(): Observable<JokeModel[]> {
    return this.httpClient.get<JokeModel[]>(
      `${this.APIEndPoint}/api/random_ten`
    );
  }

  updateSearchString(search: string) {
    this.searchSource.next(search);
  }

  updategoingToDetailPage(going: boolean) {
    this.goingToDetailPageSource.next(going);
  }
}

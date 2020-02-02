import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { JokeService } from '@app/services';
import { JokeModel } from '@app/models';
import { GLOBALS_CONSTANTS } from '@app/config';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  isBrowser;
  public GC = GLOBALS_CONSTANTS;
  public currentPage: string = this.GC.LIST_PAGE;
  public currentPageNumber = 0;
  public pagesLoaded: number[] = [];
  public jokesList: JokeModel[] = [];
  public filteredJokesList: JokeModel[] = [];
  public renderingJokesList: JokeModel[] = [];
  public joke: JokeModel;
  public loading = true;
  public searchActivated = false;
  public searchString: string;

  constructor(
    private jokeService: JokeService,
    @Inject(PLATFORM_ID) private platformId
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.jokeService.searchString$.subscribe(searchString => {
      this.filterJokes(searchString);
    });
  }

  ngOnInit() {
    this.loadMoreJokes();
  }

  public loadMoreJokes() {
    this.loading = true;

    // wether to load new jokes or shift page number
    if (
      this.jokesList.length / 10 <= this.currentPageNumber &&
      !this.searchActivated
    ) {
      this.jokeService.getRandomJokes().subscribe(
        res => {
          res.map(joke => {
            joke.image = `assets/images/${Math.floor(Math.random() * 20)}.png`;
          });
          this.jokesList = [...this.jokesList, ...res];

          this.manipulateJokesForDisplay(true);
        },
        err => {
          this.loading = false;
          console.log('err: ', err);
        }
      );
    } else {
      this.manipulateJokesForDisplay(false);
    }
  }

  private manipulateJokesForDisplay(callAfterApi: boolean) {
    setTimeout(() => {
      if (this.searchActivated) {
        this.renderingJokesList = this.filteredJokesList.slice(
          this.currentPageNumber * 10,
          (this.currentPageNumber + 1) * 10
        );
      } else {
        this.renderingJokesList = this.jokesList.slice(
          this.currentPageNumber * 10,
          (this.currentPageNumber + 1) * 10
        );
      }

      if (!callAfterApi) {
        this.currentPageNumber++;
      }

      if (callAfterApi) {
        this.currentPageNumber++;
        this.pagesLoaded.push(this.currentPageNumber);
      }
      this.loading = false;
      if (this.isBrowser) {
        window.scroll(0, 0);
      }
    }, 500);
  }

  public loadPreviousPage(pageNumber?: number) {
    if (pageNumber && pageNumber === this.currentPageNumber) {
      return;
    }

    this.loading = true;
    if (pageNumber) {
      this.currentPageNumber = Number(pageNumber);
    } else {
      this.currentPageNumber--;
    }

    setTimeout(() => {
      if (this.searchActivated) {
        this.renderingJokesList = this.filteredJokesList.slice(
          (this.currentPageNumber - 1) * 10,
          this.currentPageNumber * 10
        );
      } else {
        this.renderingJokesList = this.jokesList.slice(
          (this.currentPageNumber - 1) * 10,
          this.currentPageNumber * 10
        );
      }
      this.loading = false;
      if (this.isBrowser) {
        window.scroll(0, 0);
      }
    }, 500);
  }

  public viewFullJoke(id: number) {
    this.loading = true;
    // tslint:disable-next-line: no-shadowed-variable
    const joke = this.jokesList.find(joke => joke.id === id);
    if (joke) {
      this.joke = joke;
      this.currentPage = this.GC.DETAIL_PAGE;
      this.jokeService.updategoingToDetailPage(true);
      this.loading = false;
    }
  }

  public showListPage() {
    this.loading = true;
    setTimeout(() => {
      this.currentPage = this.GC.LIST_PAGE;
      this.loading = false;
      if (this.isBrowser) {
        window.scroll(0, 0);
      }
    }, 500);
  }

  private filterJokes(searchString: string) {
    this.loading = true;
    this.pagesLoaded = [];
    this.renderingJokesList = [];
    this.currentPageNumber = 0;
    this.currentPage = this.GC.LIST_PAGE;

    if (searchString) {
      this.searchActivated = true;
      this.filteredJokesList = this.jokesList.filter(joke => {
        return (
          joke.setup.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
          joke.punchline.toLowerCase().indexOf(searchString.toLowerCase()) >
            -1 ||
          joke.type.toLowerCase().indexOf(searchString.toLowerCase()) > -1
        );
      });

      this.calculateNumberOfPages(this.filteredJokesList);
    } else {
      this.searchActivated = false;
      this.calculateNumberOfPages(this.jokesList);
    }
  }

  calculateNumberOfPages(list: JokeModel[]) {
    if (list.length > 0) {
      const numberOfPages = Math.ceil(list.length / 10);
      for (let i = 1; i <= numberOfPages; i++) {
        this.pagesLoaded.push(i);
      }

      if (this.pagesLoaded.length > 0) {
        this.manipulateJokesForDisplay(false);
      } else {
        this.loading = false;
      }
    } else {
      this.loading = false;
    }
  }
}

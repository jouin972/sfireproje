import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { JokeModel } from '@app/models';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.scss']
})
export class JokeDetailComponent implements OnInit {
  isBrowser;

  // tslint:disable-next-line: no-input-rename
  @Input('jokesList') jokesList: JokeModel[];
  // tslint:disable-next-line: no-input-rename
  @Input('joke') joke: JokeModel;
  @Output() showListPage = new EventEmitter<boolean>();
  public loading = false;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      window.scroll(0, 0);
    }
  }

  public viewFullJoke(id: number) {
    this.loading = true;

    setTimeout(() => {
      // tslint:disable-next-line: no-shadowed-variable
      const joke = this.jokesList.find(joke => joke.id === id);
      if (joke) {
        this.joke = joke;
        this.loading = false;
        if (this.isBrowser) {
          window.scroll(0, 0);
        }
      }
    }, 500);
  }

  public goToListPage() {
    this.showListPage.emit(true);
  }
}

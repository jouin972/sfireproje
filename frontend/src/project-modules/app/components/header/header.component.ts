import { Component, OnInit } from '@angular/core';

import { JokeService } from "@app/services";
import { GLOBALS_CONSTANTS } from '@app/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public appTitle: string = GLOBALS_CONSTANTS.APP_TITLE;
  public searchInput: string = '';

  constructor(private jokeService: JokeService) {
    this.jokeService.goingToDetailPage$.subscribe(going => {
      if (going) this.searchInput = '';
    });
  }

  ngOnInit() {
  }

  public searchJoke(searchString: string) {
    this.jokeService.updateSearchString(searchString);
  }

  public goToHomePage() {
    this.searchInput = '';
    this.jokeService.updateSearchString('');
  }
}

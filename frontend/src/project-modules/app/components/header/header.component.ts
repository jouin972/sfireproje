import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { JokeService } from '@app/services';
import { GLOBALS_CONSTANTS } from '@app/config';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public appTitle: string = GLOBALS_CONSTANTS.APP_TITLE;
  public searchInput = '';
  public selectedLanguage = 'en';

  constructor(private jokeService: JokeService, private router: Router) {
    this.jokeService.goingToDetailPage$.subscribe(going => {
      if (going) {
        this.searchInput = '';
      }
    });
  }

  ngOnInit() {}

  public searchJoke(searchString: string) {
    this.jokeService.updateSearchString(searchString);
  }

  public goToHomePage() {
    this.searchInput = '';
    this.jokeService.updateSearchString('');
  }
}

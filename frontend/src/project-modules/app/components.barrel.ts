import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppComponent, HeaderComponent, FooterComponent, JokesListComponent, JokeDetailComponent } from './components';
import { Random4JokesPipe, SearchPipe, ResizeTextPipe } from "./pipes";
import { JokeService } from './services';

export const __IMPORTS = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  HttpClientJsonpModule,
  FormsModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
];

export const __DECLARATIONS = [
  AppComponent,
  HeaderComponent, 
  FooterComponent,
  JokesListComponent,
  JokeDetailComponent,
  Random4JokesPipe,
  SearchPipe,
  ResizeTextPipe
];

export const __PROVIDERS = [JokeService];
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';

import { MovieDBService } from './services/movie-db.service';

@NgModule({
  declarations: [
    AppComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }

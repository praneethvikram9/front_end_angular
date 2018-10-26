import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchDummyComponent } from './search-dummy/search-dummy.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchDummyComponent,
    MovieViewComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

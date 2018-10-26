import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponent } from './search/search.component';
import {Router} from '@angular/router';
import { WishlistComponent } from './wishlist/wishlist.component';
const routes: Routes = [
  {path:'movie-list',component:MovieListComponent},
  {path:'search/:input',component:SearchComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'',component:MovieListComponent},
  {path:'**',component:MovieListComponent}
  
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }

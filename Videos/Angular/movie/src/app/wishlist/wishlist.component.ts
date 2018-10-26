import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private movieservice:MovieService) { }

  movielist = [];


  ngOnInit() {
    this.movieservice.getAllMovie().subscribe(data => {
      this.movielist = data;
      console.log(this.movielist);
    })
  }

}

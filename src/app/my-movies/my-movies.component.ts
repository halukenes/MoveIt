import { Component, OnInit } from '@angular/core';
import { MovieDBService } from '../services/movie-db.service';

@Component({
  selector: 'my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  constructor(private movieDBService: MovieDBService) { }

  ngOnInit() {
    this.movieDBService.searchMoviewithQuery('doom');
  }

}

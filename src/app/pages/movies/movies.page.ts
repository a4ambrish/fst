import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any>;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.results = this.movieService.searchData();
  }
//Method called when slide is changed by drag or navigation
SlideDidChange() {
 // this.checkIfNavDisabled(object, slideView);
}
}

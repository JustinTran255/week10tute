import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  movieDB: any[] = [];


  constructor(private dbService: DatabaseService, private router: Router) {
  }

  ngOnInit() {
    this.onGetMovies();
  }

  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.movieDB = data;
    });
  }

}

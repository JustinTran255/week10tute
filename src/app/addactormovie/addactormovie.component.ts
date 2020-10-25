import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addactormovie',
  templateUrl: './addactormovie.component.html',
  styleUrls: ['./addactormovie.component.css']
})
export class AddactormovieComponent implements OnInit {

  actorsDB: any[] = [];
  movieDB: any[] = [];
  selectedActor = null;
  selectedMovie = null;


  constructor(private dbService: DatabaseService, private router: Router) {
  }

  ngOnInit() {
    this.onGetActors();
    this.onGetMovies();
  }

  onAddActor() {
    const obj = {actorName: this.selectedActor.name, movieTitle: this.selectedMovie.title};
    this.dbService.addActor(obj).subscribe(result => {
      this.router.navigate(['/listmovies']);
    });
  }

  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any[]) => {
      this.movieDB = data;
    });
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any[]) => {
      this.actorsDB = data;
    });
  }

  selectActor(actor) {
    this.selectedActor = actor;
  }
  selectMovie(movie) {
    this.selectedMovie = movie;
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListactorsComponent } from './listactors/listactors.component';
import { AddactorComponent } from './addactor/addactor.component';
import { DeleteactorComponent } from './deleteactor/deleteactor.component';
import { UpdateactorComponent } from './updateactor/updateactor.component';
import { RouterModule, Routes } from '@angular/router';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { AddactormovieComponent } from './addactormovie/addactormovie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RemoveactorComponent } from './removeactor/removeactor.component';

const appRoutes: Routes = [
  { path: 'listactors', component: ListactorsComponent },
  { path: 'addactor', component: AddactorComponent },
  { path: 'updateactor', component: UpdateactorComponent },
  { path: 'deleteactor', component: DeleteactorComponent },
  {path: 'listmovies', component: ListmoviesComponent},
  {path: 'deletemovie', component: DeletemovieComponent},
  {path: 'addmovie', component: AddmovieComponent},
  {path: 'addmovieactor', component: AddactormovieComponent},
  {path: 'removeactor', component: RemoveactorComponent},
  {path: '', redirectTo: '/listactors', pathMatch: 'full' },
  {path: '**', component: NotfoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ListactorsComponent,
    AddactorComponent,
    UpdateactorComponent,
    DeleteactorComponent,
    AddmovieComponent,
    DeletemovieComponent,
    ListmoviesComponent,
    AddactormovieComponent,
    NotfoundComponent,
    RemoveactorComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}

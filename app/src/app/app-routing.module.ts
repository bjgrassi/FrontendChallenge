import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { TournamentNewComponent } from './modules/valoranTournament/tournament-new/tournament-new.component';
import { TournamentListComponent } from './modules/valoranTournament/tournament-list/tournament-list.component';
import { TournamentResultComponent } from './modules/valoranTournament/tournament-result/tournament-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tournament-new', component: TournamentNewComponent },
  { path: 'tournament-list', component: TournamentListComponent },
  { path: 'tournament-result', component: TournamentResultComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

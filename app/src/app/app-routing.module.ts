import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { TournamentBattleComponent } from './modules/valoranTournament/tournament-battle/tournament-battle.component';
import { TournamentTeamListComponent } from './modules/valoranTournament/tournament-team-list/tournament-team-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tournament-battle', component: TournamentBattleComponent },
  { path: 'tournament-team-list', component: TournamentTeamListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TournamentTeamListComponent } from './tournament-team-list/tournament-team-list.component';
import { TournamentBattleComponent } from './tournament-battle/tournament-battle.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  declarations: [
    TournamentTeamListComponent,
    TournamentBattleComponent
  ],
  exports: [
    TournamentTeamListComponent,
    TournamentBattleComponent
  ]
})
export class TournamentModule { }

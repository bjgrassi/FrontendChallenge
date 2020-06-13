import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentResultComponent } from './tournament-result/tournament-result.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    ReactiveFormsModule
  ],
  declarations: [
    TournamentListComponent,
    TournamentResultComponent
  ],
  exports: [
    TournamentListComponent,
    TournamentResultComponent
  ]
})
export class TournamentModule { }

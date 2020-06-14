import { Component, OnInit } from '@angular/core';

import { Team } from '../models/team.model';

@Component({
  selector: 'app-tournament-battle',
  templateUrl: './tournament-battle.component.html',
  styleUrls: ['./tournament-battle.component.scss']
})
export class TournamentBattleComponent implements OnInit {
  public battle: Team[] = []
  public semiFinals1: Team[] = [];
  public semiFinals2: Team[] = [];
  public finals: Team[] = [];
  public winner: Team[] = [];
  public hasWinnerSemiFinals1 = false;
  public hasWinnerSemiFinals2 = false;
  public hasWinnerFinals = false;

  constructor() { }

  ngOnInit() {
    this.load();
    this.semiFinals();
  }

  public load(): void {
    const data = localStorage.getItem('teams');
    const team: Team[] = data ? JSON.parse(data) : [];
    for(let i=0; i<team.length; i++) {
      if(team[i].isSelected) {
        this.battle.push(team[i]);
      }
    }
  }

  private semiFinals() {
    this.semiFinals1 = this.battle.slice(0, 2);
    this.semiFinals2 = this.battle.slice(2, 4);
  }

  public winnerSemiFinals(team: Team, group) {
    team.winnerSemiFinals = true
    this.finals.push(team)
    this.groupWinnerSemiFinals(group)
  }

  private groupWinnerSemiFinals(group) {
    if (group == 1)
      this.hasWinnerSemiFinals1 = true;

    if (group == 2)
      this.hasWinnerSemiFinals2 = true;
  }

  public winnerFinals(team: Team) {
    team.winnerFinals = true;
    this.winner.push(team)
    this.hasWinnerFinals = true;
  }
}

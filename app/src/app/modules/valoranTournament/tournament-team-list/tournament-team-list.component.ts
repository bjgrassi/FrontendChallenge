import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Team } from '../models/team.model';

@Component({
  selector: 'app-tournament-team-list',
  templateUrl: './tournament-team-list.component.html',
  styleUrls: ['./tournament-team-list.component.scss']
})
export class TournamentTeamListComponent implements OnInit {
  public teams: Team[] = [];
  public form: FormGroup;
  public isSelected: boolean = false;
  public qtdSelectedTeams: number;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])]
    })
  }

  ngOnInit() {
    this.load();
    this.qtdSelectedTeams = this.getQtdSelectedTeams()
  }

  public load(): void {
    const data = localStorage.getItem('teams');
    this.teams = data ? JSON.parse(data) : [];
  }

  public add(): void {
    const name = this.form.controls['name'].value;
    const id = this.teams.length + 1;
    this.teams.unshift(new Team(id, name, false))
    this.save()
    this.clear()
  }

  public clear(): void {
    this.form.reset()
  }

  public markAsSelected(team: Team): void {
    team.isSelected = true;
    this.save()
    this.qtdSelectedTeams = this.getQtdSelectedTeams()
  }

  public markAsCanceled(team: Team): void {
    team.isSelected = false;
    this.save()
    this.qtdSelectedTeams = this.getQtdSelectedTeams()
  }

  public getQtdSelectedTeams() {
    let qtd = 0;
    for(let i=0; i<this.teams.length; i++) {
      if(this.teams[i].isSelected) {
        qtd++;
      }
    }
    return qtd;
  }

  public delete(team: Team): void {
    const index = this.teams.indexOf(team);
    if(index !== -1) {
      this.teams.splice(index, 1)
    }
    this.save()
  }

  public save(): void {
    const data = JSON.stringify(this.teams); //json to string
    localStorage.setItem('teams', data) // Application Tab
  }
}

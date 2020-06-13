import { Component, OnInit } from '@angular/core';

import { Competitor } from '../models/competitor.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {
  public competitors: Competitor[] = [];

  constructor() {
    this.load();
  }

  ngOnInit() {
  }

  public load() {
    const data = localStorage.getItem('competitors');
    this.competitors = JSON.parse(data);
  }

  public markAsSelected(competitor: Competitor) {
    competitor.isSelected = true;
    this.save()
  }

  public markAsCanceled(competitor: Competitor) {
    competitor.isSelected = false;
    this.save()
  }

  public delete(competitor: Competitor) {
    const index = this.competitors.indexOf(competitor);
    if(index !== -1) {
      this.competitors.splice(index, 1)
    }
    this.save()
  }

  public save() {
    const data = JSON.stringify(this.competitors); //json to string
    localStorage.setItem('competitors', data) // Application Tab
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Competitor } from '../models/competitor.model';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.scss']
})
export class TournamentListComponent implements OnInit {
  public competitors: Competitor[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required
      ])]
    })

    this.competitors.push(new Competitor(1, 'Katniss Everdeen', false))
    this.competitors.push(new Competitor(2, 'Jaime Lannister', false))
    this.competitors.push(new Competitor(3, 'Oberyn Martell',  true))
    this.competitors.push(new Competitor(4, 'Arya Stark', false))

    this.load();
  }

  ngOnInit() {
  }

  public load(): void {
    const data = localStorage.getItem('competitors');
    if(data) {
      this.competitors = JSON.parse(data);
    } else {
      this.competitors = [];
    }
  }

  public add(): void {
    const name = this.form.controls['name'].value;
    const id = this.competitors.length + 1;
    this.competitors.unshift(new Competitor(id, name, false))
    this.save()
    this.clear()
  }

  public clear(): void {
    this.form.reset()
  }

  public markAsSelected(competitor: Competitor): void {
    competitor.isSelected = true;
    this.save()
  }

  public markAsCanceled(competitor: Competitor): void {
    competitor.isSelected = false;
    this.save()
  }

  public delete(competitor: Competitor): void {
    const index = this.competitors.indexOf(competitor);
    if(index !== -1) {
      this.competitors.splice(index, 1)
    }
    this.save()
  }

  public save(): void {
    const data = JSON.stringify(this.competitors); //json to string
    localStorage.setItem('competitors', data) // Application Tab
  }
}

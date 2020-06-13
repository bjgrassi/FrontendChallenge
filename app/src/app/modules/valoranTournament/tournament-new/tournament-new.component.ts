import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Competitor } from '../models/competitor.model';

@Component({
  selector: 'app-tournament-new',
  templateUrl: './tournament-new.component.html',
  styleUrls: ['./tournament-new.component.scss']
})
export class TournamentNewComponent implements OnInit {
  public competitors: Competitor[] = [];
  public form: FormGroup;
  public showMessage = false;

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
  }

  ngOnInit() {
  }

  public add() {
    const name = this.form.controls['name'].value;
    const id = this.competitors.length + 1;
    this.competitors.unshift(new Competitor(id, name, false))
    this.save()
    this.clear()
  }

  public save() {
    const data = JSON.stringify(this.competitors); //json to string
    localStorage.setItem('competitors', data) // Application Tab
    this.getSuccessMessage();
  }

  public clear() {
    this.form.reset()
  }

  public getSuccessMessage() {
    this.showMessage = true;
  }
}

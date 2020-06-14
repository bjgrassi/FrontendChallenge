import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Member } from '../models/member.model';

@Component({
  selector: 'app-tournament-team-list',
  templateUrl: './tournament-team-list.component.html',
  styleUrls: ['./tournament-team-list.component.scss']
})
export class TournamentTeamListComponent implements OnInit {
  public members: Member[] = [];
  public form: FormGroup;
  public qtdSelectedMembers: Number = 0;

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
  }

  ngOnDestroy(): void {
    this.members.splice(0, 1)
    this.members.splice(1, 1)
    this.members.splice(2, 1)
    this.members.splice(3, 1)
    
  }

  public load(): void {
    const data = localStorage.getItem('members');
    this.members = data ? JSON.parse(data) : [];
  }

  public add(): void {
    const name = this.form.controls['name'].value;
    const id = this.members.length + 1;
    this.members.unshift(new Member(id, name, false))
    this.save()
    this.clear()
  }

  public clear(): void {
    this.form.reset()
  }

  public markAsSelected(member: Member): void {
    member.isSelected = true;
    this.save()
  }

  public markAsCanceled(member: Member): void {
    member.isSelected = false;
    this.save()
  }

  public delete(member: Member): void {
    const index = this.members.indexOf(member);
    if(index !== -1) {
      this.members.splice(index, 1)
    }
    this.save()
  }

  public save(): void {
    const data = JSON.stringify(this.members); //json to string
    localStorage.setItem('members', data) // Application Tab
  }
}

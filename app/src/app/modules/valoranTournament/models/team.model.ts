export class Team {
  constructor(
    public id: Number,
    public name: String,
    public isSelected: boolean,
    public winnerSemiFinals: boolean = false,
    public winnerFinals: boolean = false,
    public winner: boolean = false,
  ) {}
}
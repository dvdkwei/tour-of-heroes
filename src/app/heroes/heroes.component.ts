import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import {HEROES} from "../mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private _selectedHero?: Hero;

  public heroes = HEROES;

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  onSelect(hero: Hero): void {
    this._selectedHero = hero;
  }

  getSelectedHero(): Hero{
    return <Hero>this._selectedHero
  }

}

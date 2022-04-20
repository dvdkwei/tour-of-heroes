import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private _selectedHero?: Hero;

  public heroes: Hero[] = [];

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(h => this.heroes = h);
  }
}

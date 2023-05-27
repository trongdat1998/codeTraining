import { Component, OnInit } from '@angular/core';

import { Hero } from '../../../core/interfaces/hero';
import { HeroService } from '../../../core/service/hero/hero.service';
import { MessageService } from '../../../core/service/message/message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../../data-test/mock-heroes';
import { MessageService } from '../../service/message/message.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}

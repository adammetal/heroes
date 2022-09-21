import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private logService: LogService,
  ) { }

  hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.logService.addMessage('Get Hero');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
        this.logService.addMessage(`Hero loaded ${hero?.name}`);
      });
  }

  goBack(): void {
    this.location.back();
  }
}

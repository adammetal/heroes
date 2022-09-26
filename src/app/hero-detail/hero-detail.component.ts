import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { LogService } from '../log.service';
import { LoyaltyComponent } from '../loyalty/loyalty.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private logService: LogService
  ) {}

  hero?: Hero;

  newImage?: string;

  originalLoyalty?: number;

  @ViewChild('loyalty')
  loyalty?: LoyaltyComponent;

  ngOnInit(): void {
    this.getHero();
  }

  ngAfterViewInit(): void {
    console.log(this.loyalty);
    this.originalLoyalty = this.loyalty?.counter;
  }

  resetLoyalty(): void {
    if (this.originalLoyalty !== undefined) {
      this.loyalty?.setTo(this.originalLoyalty);
    }
  }

  onSaveImage(): void {
    if (this.hero) {
      this.hero.image = this.newImage;
    }
  }

  getHero(): void {
    this.logService.addMessage('Get Hero');
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      this.newImage = hero?.image;
      this.logService.addMessage(`Hero loaded ${hero?.name}`);
    });
  }

  goBack(): void {
    this.location.back();
  }
}

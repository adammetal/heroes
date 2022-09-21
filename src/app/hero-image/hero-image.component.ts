import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.component.html',
  styleUrls: ['./hero-image.component.css']
})
export class HeroImageComponent implements OnInit {
  loading: boolean = true;

  error: boolean = false;

  @Input() src?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onImageLoaded(): void {
    console.log('image loaded');
    this.loading = false;
  }

  onImageError(event: Event): void {
    console.log(event);
    this.error = true;
    this.loading = false;
  }
}

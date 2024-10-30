import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination, EffectCube } from 'swiper/modules';

register();
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent implements OnInit {
  ngOnInit() {
    const swiperEl = document.querySelector('swiper-container');
    if (!swiperEl) return;

    const params = {
      modules: [Navigation, Pagination, EffectCube],
      injectStylesUrls: ['./assets/swiper.css'],
    };

    Object.assign(swiperEl, params);

    swiperEl.initialize();
  }
}

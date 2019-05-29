import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaginationService {

  constructor() { }

  displaySlide(n:number):void {
    const prevBtn = document.getElementById('previous');
    const nextBtn = document.getElementById('next');
    const submitBtn = document.getElementById('submit');
    const slides = document.querySelectorAll('slide');
    var currentSlide: number = 0;

    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;

    if(currentSlide === 0) {

      prevBtn.style.display = 'none';

    } else {

      prevBtn.style.display = 'inline-block';
    }

    if(currentSlide === slides.length - 1) {

      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-block';

    } else {

      nextBtn.style.display = 'inline-block';
      submitBtn.style.display = 'none';

    }

  }

}

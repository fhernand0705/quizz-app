import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PaginationService {

  constructor() { }

  //set current slide to 0
  currentSlide: number = 0;

  displaySlide(n:number):void {
    const prevBtn: any = document.getElementById('previous');
    const nextBtn: any = document.getElementById('next');
    const submitBtn: any = document.getElementById('submit');
    const slides: any = document.querySelectorAll('.slide');

    //hide current slide
    slides[this.currentSlide].classList.remove('active-slide');
    //show new slide
    slides[n].classList.add('active-slide');
    //update current slide number
    this.currentSlide = n;

    if(this.currentSlide === 0) {

      prevBtn.style.display = 'none';

    } else {

      prevBtn.style.display = 'inline-block';
      prevBtn.style.alignItems = 'center';
    }

    if(this.currentSlide === slides.length - 1) {

      nextBtn.style.display = 'none';
      submitBtn.style.display = 'inline-block';

    } else {

      nextBtn.style.display = 'inline-block';
      submitBtn.style.display = 'none';

    }

  }

  //add functionationality to the next button
  displayNextSlide() {
    this.displaySlide(this.currentSlide + 1);
  }

  //add functionationality to the previous button
  displayPreviousSlide():void {
    this.displaySlide(this.currentSlide - 1);
  }

  //add click event to call function slides
  navBtns() {
    const nextBtn2 = document.getElementById('next');
    const prevBtn2 = document.getElementById('previous');

    nextBtn2.addEventListener('click', () => {
      this.displayNextSlide();
    });

    prevBtn2.addEventListener('click', () => {
        this.displayPreviousSlide();
    });
  }

}

import { Component } from '@angular/core';
import { animate, style, transition, trigger, state } from '@angular/animations';



// const enterTransition = transition(':enter', [style({
//   opacity:0
// }),
// animate('1s ease-in', style({opacity: 1}))]);

// const exitTransition = transition(':leave', [style({
//   opacity:1
// }),
// animate('1s ease-out', style({opacity: 0}))]);

// const fadeIn = trigger('fadeIn',[enterTransition]);
// const fadeOut = trigger('fadeOut',[exitTransition]);


//V2
const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({
      opacity:1,
    })
  ),
  state(
    'close',
    style({
      opacity:0,
    })
  ),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')]),
]);


const slideInFromBottom = trigger('slideInFromBottom', [
  transition(':enter', [
    style({
      transform: 'translateY(100%)',
      opacity: 0
    }),
    animate('1s ease-out', style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate('1s ease-in', style({
      transform: 'translateY(100%)',
      opacity: 0
    }))
  ])
]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // animations: [fadeIn, fadeOut]
  animations: [fadeInOut, slideInFromBottom]
})
export class HomeComponent {
  showFadeOutElement = true;

  toggleFadeOutElement() {
    this.showFadeOutElement = !this.showFadeOutElement;
  }

}

import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const enterTransition = transition(':enter', [style({
  opacity:0
}),
animate('1s ease-in', style({opacity: 1}))]);

const fadeIn = trigger('FadeIn',[enterTransition]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn]
})
export class AppComponent {
  title = 'learning-animation-second';
}

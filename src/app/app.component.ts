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
  images = [
    {
      imageSrc:'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt943c9f051f0087c0/639f1d7d03c7a66c44782060/GettyImages-1245184407.jpg?auto=webp&format=pjpg&width=1080&quality=60',
      imageAlt:'ronaldo',
    },
    {
      imageSrc:'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSDbBSO9U_Kfuv9H3gdp0hqve0SDu4cw7ELWrkDUkU2-X1NsPwNBAf7U1nlonYDYYeK3-jdXx9tNlrPbUA',
      imageAlt:'messi',
    },
    {
      imageSrc:'https://img.olympicchannel.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/peejovfhkkhlctkckdix',
      imageAlt:'neymar',
    },
  ];
}

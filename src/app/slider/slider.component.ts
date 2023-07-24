import {Component} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  // @ViewChild('sliderInput') sliderInput: any;

  // image1 = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt943c9f051f0087c0/639f1d7d03c7a66c44782060/GettyImages-1245184407.jpg?auto=webp&format=pjpg&width=1080&quality=60';
  // image2 = 'https://img.olympicchannel.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/peejovfhkkhlctkckdix';

  sliderValue = 50;


  clipPath1 =  'https://plus.unsplash.com/premium_photo-1672987719865-b34bae00f8a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
  clipPath2 =  'https://images.unsplash.com/photo-1609153315698-a0396f42fd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';


  image1ClipPath = `inset(0% 0% 0% ${100 - 50}%)`;
  image2ClipPath = `inset(0% ${50}% 0% 0%)`;

  sliderDirection: 'left' | 'right' = 'left';
  slideInterval: any; // Used to store the interval reference
  isSliding = false;

  constructor() {
    this.updateClipPaths();
  }

  updateClipPaths() {
    const percentage = this.sliderValue;
    console.log("percentage ", percentage);
    this.image1ClipPath = `inset(0% 0% 0% ${100 - percentage}%)`;
    this.image2ClipPath = `inset(0% ${percentage}% 0% 0%)`;
  }

  startSlide(direction: 'left' | 'right') {
    this.isSliding = true;
    this.sliderDirection = direction;
    this.slide();
  }

  stopSlide() {
    this.isSliding = false;
    clearInterval(this.slideInterval); // Clear the interval when stopping the slide
  }

  slide() {
    if (this.isSliding) {
      if (this.sliderDirection === 'left') {
        this.sliderValue = Math.max(0, this.sliderValue - 1);
      } else {
        this.sliderValue = Math.min(100, this.sliderValue + 1);
      }
      this.updateClipPaths();
      this.slideInterval = setTimeout(() => this.slide(), 20); // Adjust the speed of sliding here
    }
  }


}

import {Component} from '@angular/core';
import 'img-comparison-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {

  image1 = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt943c9f051f0087c0/639f1d7d03c7a66c44782060/GettyImages-1245184407.jpg?auto=webp&format=pjpg&width=1080&quality=60';
  image2 = 'https://img.olympicchannel.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/peejovfhkkhlctkckdix';


  // clipPath1 =  'https://plus.unsplash.com/premium_photo-1672987719865-b34bae00f8a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
  // clipPath2 =  'https://images.unsplash.com/photo-1609153315698-a0396f42fd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb2x1dGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';


  // clipPath1 =  'https://www.shutterstock.com/image-illustration/gay-pride-month-june-lgbtq-600w-2291222177.jpg';
  // clipPath2 =  'https://www.shutterstock.com/image-illustration/gay-pride-month-june-lgbtq-600w-2159459759.jpg';




}


// steps to make it work

// npm i img-comparison-slider

// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

// 
// @NgModule({
//   declarations: [
//     SliderComponent
//   ],
//   imports: [
//     CommonModule,
//     MatSliderModule,
//     FormsModule,
//   ],
//   exports: [
//     SliderComponent,
//   ],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA] /// focus on this line
// })
// export class SliderModule { }

// import schema line in both module.ts file
 
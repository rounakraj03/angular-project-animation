import {animate, state, style, transition, trigger} from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({opacity:0})),
    transition(':enter,:leave',[
        animate(800)
    ])
]);




import { Component } from '@angular/core';
import { fade } from '../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fade]
})
export class HomeComponent {

}






  <div @fade>
  <h1>Welcome to My Blog</h1>
  <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTtC8rsdvshoeMuYQ76Cwpt9abyIJpUh_RgJpZ4HcGrWu6np5d4ROGz6480HKM45i_HbQlDojfyPo1v4A8" alt="Image 1">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed neque at metus bibendum interdum. Nulla facilisi. Phasellus ac elit a turpis interdum dapibus ac eu justo. In hac habitasse platea dictumst. Etiam volutpat odio vel sapien laoreet, sit amet sagittis felis gravida. Suspendisse potenti. Nullam vel turpis ac orci sodales rhoncus. Nulla facilisi. Vestibulum a metus at libero tempor blandit. Ut eu diam eget tellus lacinia rhoncus. Sed nec lacus vel urna ultricies dictum.
  </p>
  <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTtC8rsdvshoeMuYQ76Cwpt9abyIJpUh_RgJpZ4HcGrWu6np5d4ROGz6480HKM45i_HbQlDojfyPo1v4A8" alt="Image 2">
  <p>
    Phasellus facilisis neque ac nisi consectetur varius. Nulla facilisi. Sed eget massa id ex feugiat rutrum eu non elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut ultricies ligula vitae ultricies tincidunt. Aenean id mauris vitae justo ullamcorper aliquam at id nisi. Integer a mauris justo. In consequat augue eu purus lobortis, eget viverra nisi dictum. Nullam id mauris quis mi volutpat finibus a quis ipsum. Sed eu enim tortor. Mauris elementum arcu vel leo elementum, eu venenatis ex suscipit. Vivamus a ullamcorper sapien.
  </p>
  <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTtC8rsdvshoeMuYQ76Cwpt9abyIJpUh_RgJpZ4HcGrWu6np5d4ROGz6480HKM45i_HbQlDojfyPo1v4A8" alt="Image 3">
  <p>
    Sed nec pharetra risus, a lacinia elit. Nullam luctus massa id mauris laoreet, et luctus purus scelerisque. Duis ac metus eros. Duis vestibulum felis et diam feugiat, sit amet convallis elit finibus. Sed euismod, ipsum id tristique convallis, nibh lectus pulvinar purus, at pellentesque nulla tellus eu mauris. Sed posuere elit non felis efficitur, non posuere nunc tincidunt. Quisque interdum nulla vitae euismod ultrices. Vivamus pulvinar quam ac lectus efficitur hendrerit. Vestibulum nec sapien vel tortor rutrum vehicula. Fusce ullamcorper sit amet lectus eu ultricies. Vivamus lacinia consequat felis, nec efficitur dolor facilisis vitae.
  </p>
</div>  




h1 {
    text-align: center;
  }
  img {
    max-width: 40%;
    display: block;
    margin: 20px auto;
  }
  p {
    text-align: justify;
    max-width: 60%;
    margin: 20px auto;

  }







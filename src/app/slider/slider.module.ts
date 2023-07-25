import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { MatSlider } from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
  ],
  exports: [
    SliderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderModule { }

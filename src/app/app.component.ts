import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //cup
  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
  
  selectedColor = this.colors[0];

  colorsfont: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
  selectedColorfont = this.colorsfont[4];


   //product-tow
  colorstow: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
 
  selectedColortow = this.colorstow[4];

  //git-box
  colorsbox: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
 
  selectedColorbox = this.colorstow[0];

  colorsboxrob: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
 
  selectedColorboxrob = this.colorstow[5];

  //can
  colorscan: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
 
  selectedColorcan = this.colorstow[0];

   //cake
   colorscake: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'
  ];
 
  selectedColorcake = this.colorstow[2];
  selectedColorcake1 = this.colorstow[1];
  selectedColorcake2 = this.colorstow[3];
  selectedColorcake3 = this.colorstow[1];
 

  //double choclote cake

 
  selectedColordouble1 = this.colorstow[2];
  selectedColordouble2 = this.colorstow[3];
  selectedColordouble3 = this.colorstow[3];
  selectedColordouble4 = this.colorstow[4];

 //cake 2
 selectedColorcake31 = this.colorstow[2];
 selectedColorcake32 = this.colorstow[3];
 selectedColorcake33 = this.colorstow[2];
 selectedColorcake34 = this.colorstow[4];

}

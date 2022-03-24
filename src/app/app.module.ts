import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductTowComponent } from './product-tow/product-tow.component';
import { CakeComponent } from './cake/cake.component';
import { Cake1Component } from './cake1/cake1.component';
import { MugComponent } from './mug/mug.component';
import { PopcornComponent } from './popcorn/popcorn.component';
import { Popcorn1Component } from './popcorn1/popcorn1.component';
import { GiftBoxComponent } from './gift-box/gift-box.component';
import { SodaCanComponent } from './soda-can/soda-can.component';
import { CupcakeComponent } from './cupcake/cupcake.component';
import { Cupcake1Component } from './cupcake1/cupcake1.component';
import { Cupcake2Component } from './cupcake2/cupcake2.component';
import { Cake2Component } from './cake2/cake2.component';
import { Cupcake3Component } from './cupcake3/cupcake3.component';
import { Cake3Component } from './cake3/cake3.component';
import { Cake4Component } from './cake4/cake4.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPreviewComponent,
    ProductTowComponent,
    CakeComponent,
    Cake1Component,
    MugComponent,
    PopcornComponent,
    Popcorn1Component,
    GiftBoxComponent,
    SodaCanComponent,
    CupcakeComponent,
    Cupcake1Component,
    Cupcake2Component,
    Cake2Component,
    Cupcake3Component,
    Cake3Component,
    Cake4Component
  ],
  imports: [
    BrowserModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderPage } from './header/header.page';
import { FooterPage } from './footer/footer.page';
import { mainContentPage } from './main-content/main-content.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],

  declarations: [
    HeaderPage,
    FooterPage,
    mainContentPage
  ],
  exports:[
    HeaderPage,
    FooterPage,
    mainContentPage
  ]
})
export class SharedModule {}

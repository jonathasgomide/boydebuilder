import { IonicModule, IonIcon } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1Service } from './tab1.service';
import { HeaderModule } from '../_shared/header/header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    HeaderModule,
    IonIcon
  ],
  declarations: [Tab1Page],
  providers: [Tab1Service]
})
export class Tab1PageModule {}

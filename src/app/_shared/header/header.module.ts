
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  entryComponents: [],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }

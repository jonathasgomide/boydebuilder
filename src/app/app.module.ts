import { UserService } from './../auth/user.service';
import { ApiService } from './../api/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'tab1',
    loadChildren: './tab2/tab2.module#Tab2PageModule',
  },
  {
    path: 'tab2',
    loadChildren: './tab3/tab3.module#Tab3PageModule',
  },
  {
    path: 'tab3',
    loadChildren: './tab1/tab1.module#Tab1PageModule',
  }
];


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
    [
      BrowserModule,
      IonicModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      AppRoutingModule,
      HttpModule,
      HttpClientModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

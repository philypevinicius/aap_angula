import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import {AngularFireModule} from '@angular/fire/compat'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA_0k4DXwn2YqJOQBHY8_l7SXXYcZPqL70",
      authDomain: "album-phc-527ad.firebaseapp.com",
      projectId: "album-phc-527ad",
      storageBucket: "album-phc-527ad.appspot.com",
      messagingSenderId: "167719543596",
      appId: "1:167719543596:web:eaa6568f9241261137c289"
    }),
    AngularFireStorageModule,
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

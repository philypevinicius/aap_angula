import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { ListaRegistroComponent } from '../lista-registro/lista-registro.component';

@NgModule({
  declarations: [Tab5Page],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    ListaRegistroComponent,
  ],
})
export class Tab5PageModule {}

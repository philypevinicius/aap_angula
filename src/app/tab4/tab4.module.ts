import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { ListaRegistroComponent } from '../lista-registro/lista-registro.component';

@NgModule({
  declarations: [Tab4Page],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule,
    ListaRegistroComponent,
  ],
})
export class Tab4PageModule {}

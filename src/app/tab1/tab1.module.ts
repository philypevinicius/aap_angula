import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ListaRegistroComponent } from '../lista-registro/lista-registro.component';
import { TabRelacionamentoComponent } from './tab-relacionamento/tab-relacionamento.component';

@NgModule({
  declarations: [Tab1Page, TabRelacionamentoComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    AngularFireStorageModule,
    ListaRegistroComponent,
  ],
})
export class Tab1PageModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabRelacionamentoComponent } from './tab-relacionamento/tab-relacionamento.component';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: ':ano',
    component: TabRelacionamentoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}

import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private loading: HTMLIonLoadingElement;

  constructor(private readonly loadingControl: LoadingController) {}

  async showLoader(message = 'Carregando...'): Promise<void> {
    this.loading = await this.loadingControl.create({
      spinner: 'circular',
      message,
    });
    this.loading.present();
  }

  closeLoader(): void {
    this.loading.dismiss();
  }
}

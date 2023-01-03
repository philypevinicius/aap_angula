import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private loading: HTMLIonLoadingElement;

  constructor(
    private readonly loadingControl: LoadingController,
    private readonly alertControl: AlertController
  ) {}

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

  async showAlert(
    header: string,
    message: string,
    handler: () => any
  ): Promise<void> {
    const alert = await this.alertControl.create({
      header,
      message,
      buttons: [{ text: 'OK', handler }],
    });
    await alert.present();
  }
}

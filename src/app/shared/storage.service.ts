import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private readonly af: AngularFireStorage,
    private readonly common: CommonService
  ) {}

  async uploadImage(path: any): Promise<string> {
    await this.common.showLoader('Fazendo upload...');
    return this.af
      .upload(`/files-${Math.random()}${path['name']}`.trim(), path)
      .then(
        (a) => {
          this.common.closeLoader();
          return a.metadata.fullPath;
        },
        () => {
          this.common.closeLoader();
        }
      );
  }

  downloadImage(filePath: string): Observable<any> {
    return this.af.ref(filePath).getDownloadURL();
  }

  delete(filePath: string): Observable<any> {
    return this.af.ref(filePath).delete();
  }
}

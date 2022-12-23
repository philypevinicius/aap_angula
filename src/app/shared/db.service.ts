import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  SnapshotAction,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Album } from '../types/album';
import { Registro } from '../types/registro';
import { TipoRegistro } from '../types/tipo-registro';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(
    private readonly db: AngularFireDatabase,
    private readonly common: CommonService
  ) {}

  async criarAlbum(
    registro: Registro<Album>,
    tipo: TipoRegistro
  ): Promise<void> {
    await this.common.showLoader();
    this.db
      .list(tipo)
      .push({
        album: registro.album,
        dados: {
          data: registro.dados?.data,
          imagem: registro.dados?.imagem,
          title: registro.dados.title,
          descricao: registro.dados?.descricao,
        },
      })
      .then(
        () => {
          this.common.closeLoader();
        },
        () => {
          this.common.closeLoader();
        }
      );
  }

  getRegistros(
    tipo: TipoRegistro
  ): Observable<SnapshotAction<Registro<Album>>[]> {
    return this.db.list<Registro<Album>>(tipo).snapshotChanges();
  }

  deleteRegistro(tipo: TipoRegistro, key: string) {
    this.db.list(tipo).remove(key);
  }
}

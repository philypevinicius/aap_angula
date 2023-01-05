import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { IonicModule } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { CommonService } from '../shared/common.service';
import { DbService } from '../shared/db.service';
import { StorageService } from '../shared/storage.service';
import { Album } from '../types/album';
import { Registro } from '../types/registro';
import { TipoRegistro } from '../types/tipo-registro';

@Component({
  standalone: true,
  selector: 'app-lista-registro',
  templateUrl: './lista-registro.component.html',
  styleUrls: ['./lista-registro.component.scss'],
  imports: [CommonModule, IonicModule, AngularFireStorageModule],
})
export class ListaRegistroComponent implements OnInit {
  @Input() tipo: TipoRegistro;
  @Input() filtro = '';

  list: Registro<Album>[] = [];

  constructor(
    private db: DbService,
    private storage: StorageService,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.db.getRegistros(this.tipo).subscribe({
      next: (actions) => {
        this.list = actions.map((action) => {
          return {
            ...action.payload.val(),
            key: action.key,
          };
        });
      },
    });
  }

  getImagem(filePath: string) {
    return this.storage.downloadImage(filePath);
  }

  delete(registro: Registro<Album>) {
    if (registro.dados?.imagem) {
      this.deleteImage(registro);
    } else {
      this.delete(registro);
    }
  }

  private deleteImage(registro: Registro<Album>) {
    this.storage
      .delete(registro.dados.imagem)
      .pipe(take(1))
      .subscribe({
        next: () => {
          this.deleteRegistro(registro);
        },
      });
  }

  private deleteRegistro(registro: Registro<Album>) {
    this.common.showAlert('Atenção!', 'Deseja excluir?', () =>
      this.db.deleteRegistro(this.tipo, registro.key)
    );
  }
}

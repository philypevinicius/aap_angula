import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from '../shared/db.service';
import { StorageService } from '../shared/storage.service';
import { Album } from '../types/album';
import { Registro } from '../types/registro';
import { TipoRegistro } from '../types/tipo-registro';
import { CommonModule } from '@angular/common';

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

  list: Observable<Registro<Album>[]>;

  constructor(private db: DbService, private storage: StorageService) {}

  ngOnInit(): void {
    this.list = this.db.getRegistros(this.tipo);
  }

  getImagem(filePath: string) {
    return this.storage.downloadImage(filePath);
  }
}

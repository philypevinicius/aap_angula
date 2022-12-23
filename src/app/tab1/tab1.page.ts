import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from '../shared/db.service';
import { StorageService } from '../shared/storage.service';
import { Album } from '../types/album';
import { Registro } from '../types/registro';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  list: Observable<Registro<Album>[]>;

  constructor(private db: DbService, private storage: StorageService) {}

  ngOnInit(): void {
    this.list = this.db.getRegistros('Relacionamento');
  }

  getImagem(filePath: string) {
    return this.storage.downloadImage(filePath);
  }
}

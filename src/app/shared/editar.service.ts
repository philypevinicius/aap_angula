import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Album } from '../types/album';
import { Registro } from '../types/registro';
import { TipoRegistro } from '../types/tipo-registro';

@Injectable({
  providedIn: 'root',
})
export class EditarService {
  private readonly registro: BehaviorSubject<Registro<Album>> =
    new BehaviorSubject(null);
  private readonly tipo: BehaviorSubject<TipoRegistro> = new BehaviorSubject(
    null
  );

  set paraEditar(registro: Registro<Album>) {
    this.registro.next(registro);
  }

  set tipoParaEditar(tipo: TipoRegistro) {
    this.tipo.next(tipo);
  }

  get pegarRegistro() {
    return this.registro.getValue();
  }

  get pegarTipo() {
    return this.tipo.getValue();
  }
}

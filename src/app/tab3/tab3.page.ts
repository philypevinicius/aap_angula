import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../shared/db.service';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  formulario: UntypedFormGroup;
  edicao = false;
  path = '';

  constructor(
    private route: ActivatedRoute,
    private storage: StorageService,
    private db: DbService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      title: ['', [Validators.required]],
      descricao: [''],
      data: [''],
      album: [''],
      imagem: [''],
      tipo: ['', [Validators.required]],
    });
    this.route.params.subscribe({
      next: ({ editar }) => {
        if (editar) {
          this.edicao = true;
        }
      },
    });
  }

  selectToUpload($event) {
    this.path = $event.target.files[0];
  }

  uploadImage() {
    return this.storage.uploadImage(this.path);
  }

  createAlbum(event) {
    console.log(event);

    const f = this.formulario.getRawValue();

    if (f.album && this.path) {
      this.uploadImage().then((filePath) => {
        this.saveAlbum(f, filePath);
      });
    } else {
      this.saveAlbum(f);
    }
  }

  saveAlbum(form: { [key: string]: any }, filePath = '') {
    this.db.criarAlbum(
      {
        album: form['album'],
        dados: {
          title: form['title'],
          descricao: form['descricao'],
          data: form['data'],
          imagem: filePath,
        },
      },
      form['tipo']
    );
  }
}

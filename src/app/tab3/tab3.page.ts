import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DbService } from '../shared/db.service';
import { EditarService } from '../shared/editar.service';
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
    private editarS: EditarService,
    private router: NavController,
    private fb: FormBuilder,
    private db: DbService
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
          const e = this.editarS.pegarRegistro;
          const t = this.editarS.pegarTipo;
          console.log('e', e);
          this.formulario.patchValue({
            title: e.dados?.title,
            descricao: e.dados.descricao,
            data: e.dados.data,
            album: e.album,
            imagem: e.dados.imagem,
            tipo: t,
          });
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
    const f: { [key: string]: any } = this.formulario.getRawValue();

    if (this.edicao) {
      const e = this.editarS.pegarRegistro;
      const t = this.editarS.pegarTipo;
      const r = {
        album: f['album'],
        dados: {
          title: f['title'],
          descricao: f['descricao'],
          data: f['data'],
          imagem: e.dados.imagem,
        },
      };
      this.db.updateRegistro(t, e.key, r).then(() => {
        this.router.navigateForward(['tabs/tab1']);
      });
    } else {
      if (f.album && this.path) {
        this.uploadImage().then((filePath) => {
          this.saveAlbum(f, filePath);
          this.router.navigateForward(['tabs/tab1']);
        });
      } else {
        this.saveAlbum(f);
      }
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

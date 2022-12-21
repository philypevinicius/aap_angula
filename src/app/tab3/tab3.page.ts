import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  path:string

  constructor(private af:AngularFireStorage){}

  upload($event){
    this.path = $event.target.files[0]
  }

  uploadImage(){
    console.log(this.path)

    this.af.upload("/files"+Math.random()+this.path,this.path)
  }

}

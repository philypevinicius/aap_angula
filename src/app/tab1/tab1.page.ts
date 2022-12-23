import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DbService } from '../shared/db.service';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private db: DbService, private storage: StorageService) {}

  ngOnInit(): void {}
}

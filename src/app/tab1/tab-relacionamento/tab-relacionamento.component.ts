import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-relacionamento',
  templateUrl: './tab-relacionamento.component.html',
  styleUrls: ['./tab-relacionamento.component.scss'],
})
export class TabRelacionamentoComponent implements OnInit {
  ano: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe({
      next: (p) => {
        this.ano = p?.ano ?? '';
        console.log(p);
      },
    });
  }
}

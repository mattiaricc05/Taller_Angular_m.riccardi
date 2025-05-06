// src/app/serie-detail/serie-detail.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { SerieService }       from '../serie.service';
import { SerieDetailModel }   from '../serie-detail-model';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  @Input() serieDetail?: SerieDetailModel;
  private serieId?: number;

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService
  ) {}

  private loadSerie(): void {
    if (this.serieId != null) {
      this.serieService
        .getSerieById(this.serieId)
        .subscribe(data => this.serieDetail = data);
    }
  }

  ngOnInit(): void {
    if (!this.serieDetail) {
      const idParam = this.route.snapshot.paramMap.get('id');
      this.serieId = idParam ? +idParam : undefined;
      this.loadSerie();
    }
  }
}
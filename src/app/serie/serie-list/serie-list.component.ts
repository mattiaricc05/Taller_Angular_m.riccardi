// src/app/serie-list/serie-list.component.ts
import { Component, OnInit }          from '@angular/core';
import { CommonModule }                from '@angular/common';
import { SerieDetailModel }            from '../serie-detail-model';
import { SerieService }                from '../serie.service';
import { SerieDetailComponent }        from '../serie-detail/serie-detail.component';

@Component({
  selector: 'app-serie-list',
  standalone: true,
  imports: [ CommonModule, SerieDetailComponent ],  // importamos el detail
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: SerieDetailModel[] = [];
  averageSeasons = 0;
  selectedSerie?: SerieDetailModel;   // ← aquí guardamos la serie clicada

  constructor(private serieService: SerieService) {}

  ngOnInit() {
    this.serieService.getSeries()
      .subscribe(data => {
        this.series = data;
        this.calculateAverageSeasons();
      });
  }

  calculateAverageSeasons(): void {
    if (!this.series.length) {
      this.averageSeasons = 0;
      return;
    }
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    this.averageSeasons = total / this.series.length;
  }

  // ← al hacer click asignamos la serie seleccionada
  selectSerie(s: SerieDetailModel): void {
    this.selectedSerie = s;
  }
}
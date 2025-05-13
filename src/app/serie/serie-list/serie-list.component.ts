import { Component, OnInit } from '@angular/core';
import { SerieDetailModel } from '../serie-detail-model';
import { SerieService } from '../serie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  standalone: true,
  imports: [ CommonModule ]
})
export class SerieListComponent implements OnInit {

  series: Array<SerieDetailModel> = [];
  averageSeasons: number = 0;  // ← nueva propiedad

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries()
      .subscribe(data => {
        this.series = data;
        this.calculateAverageSeasons();    // ← calcular al recibir datos
      });
  }

  ngOnInit() {
    this.getSeries();
  }

  // ← nuevo método
  calculateAverageSeasons(): void {
    if (this.series.length === 0) {
      this.averageSeasons = 0;
      return;
    }
    const total = this.series
      .map(s => s.seasons)
      .reduce((sum, curr) => sum + curr, 0);
    this.averageSeasons = total / this.series.length;
  }

}
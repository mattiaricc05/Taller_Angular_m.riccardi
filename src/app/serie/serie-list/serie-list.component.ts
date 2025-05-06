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


  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries()
    .subscribe( data => this.series = data)
  }

  ngOnInit() {
    this.getSeries()
  }

}

// src/app/serie-detail/serie-detail.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule }     from '@angular/common';
import { SerieDetailModel } from '../serie-detail-model';

@Component({
  selector: 'app-serie-detail',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <ng-container *ngIf="serieDetail; else noSelection">
      <div class="card shadow-sm my-4 mx-auto" style="max-width:800px">
        <img
          *ngIf="serieDetail.poster"
          [src]="serieDetail.poster"
          [alt]="serieDetail.name"
          class="card-img-top"
          style="height:300px; object-fit:cover;"
        >
        <div class="card-body">
          <h2 class="card-title">{{ serieDetail.name }}</h2>
          <p class="mb-2">
            <span class="badge bg-info text-dark">{{ serieDetail.channel }}</span>
            <span class="badge bg-success ms-2">{{ serieDetail.seasons }} temp.</span>
          </p>
          <p class="card-text">{{ serieDetail.description }}</p>
          <a
            *ngIf="serieDetail.webpage"
            [href]="serieDetail.webpage"
            target="_blank"
            class="btn btn-outline-primary"
          >
            Ver más
          </a>
        </div>
      </div>
    </ng-container>

    <ng-template #noSelection>
      <div class="alert alert-secondary text-center my-4">
        Selecciona una serie para ver el detalle.
      </div>
    </ng-template>
  `,
  styles: [`
    .card-title { font-size: 1.75rem; margin-bottom: .5rem; }
    .card-text  { line-height: 1.6; }
  `]
})
export class SerieDetailComponent {
  @Input() serieDetail?: SerieDetailModel;
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LoaderState } from './loader';
import { LoaderService } from './http-loader.service';

@Component({
  selector: 'app-http-loader',
  template: `
    <div class="loader-overlay" *ngIf="isLoading | async">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['./http-loader.component.scss']
})
export class HttpLoaderComponent  {
  isLoading: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.isLoading$;
    
   }

}
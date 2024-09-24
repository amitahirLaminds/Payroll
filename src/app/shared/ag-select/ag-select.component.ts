import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { ICellEditorAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule],
  templateUrl: './ag-select.component.html',
  styles: [
    `
      :host {
        display: block;
        width: 100%;
      }
    `,
  ],
})
export class AgSelectComponent implements ICellEditorAngularComp, AfterViewInit {
  @ViewChild('ngSelect') ngSelect!: NgSelectComponent;

  params: any;
  selectedValue?: any;
  cellWidth?: string;

  ngAfterViewInit() {
    setTimeout(() => this.ngSelect.open());
  }

  agInit(params: any): void {
    this.params = params;
    this.selectedValue = params.value;
    this.cellWidth = params.column.actualWidth + 'px';
  }

  getValue(): any {
    return this.selectedValue;
  }

  isPopup(): boolean {
    return true;
  }

  onChange() {
    this.params.stopEditing();
  }
}

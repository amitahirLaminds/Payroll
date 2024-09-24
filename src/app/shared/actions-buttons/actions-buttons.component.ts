import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-actions-buttons',
  templateUrl: './actions-buttons.component.html',
  host: {
    class: 'd-flex align-items-start gap-4 flex-wrap mb-5',
  },
})
export class ActionsButtonsComponent {
  @Input() editData: any; // Data for edit
  @Input() preview: any;
  @Output() addNew = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() authorize = new EventEmitter<void>();
  @Output() deactivate = new EventEmitter<void>();
  @Output() unauthorize = new EventEmitter<void>();
  @Output() activate = new EventEmitter<void>();
  @Output() exportAsCSV = new EventEmitter<void>();
  @Output() exportAsExcel = new EventEmitter<void>();
  @Output() exportAsPDF = new EventEmitter<void>();
  @Output() printPreview = new EventEmitter<void>();

  isAuthorized = signal(false);
  isActivated = signal(false);

  constructor() {}

  onAddNew() {
    this.addNew.emit();
  }
  
  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onAuthorize() {
    this.isAuthorized.set(true);
    this.authorize.emit();
  }

  onUnAuthorize() {
    this.isAuthorized.set(false);
    this.unauthorize.emit();
  }

  onActivate() {
    this.isActivated.set(true);
    this.activate.emit();
  }
  onDeactivate() {
    this.isActivated.set(false);
    this.deactivate.emit();
  }

  // Emit event for print dashboard action
  printsPreview() {
    this.printPreview.emit()
  }
  exportAsCSVs() {
    this.exportAsCSV.emit()
  }
  exportAsExcels() {
    this.exportAsExcel.emit()
  }
  exportAsPDFs() {
    this.exportAsPDF.emit()
  }
}

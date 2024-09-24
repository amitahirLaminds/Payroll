import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  template: `<div *ngIf="isInvalid" class="error-message">
  {{ errorMessage }}
</div>`,
  styles: `.error-message {
  color: red;
  font-size: 0.875em;
  margin-top: 0.25em;
}`
})
export class ErrorMessageComponent {
  @Input() control: AbstractControl | null = null;
  @Input() errorMessages: { [key: string]: string } = {};

  get errorMessage(): string {
    if (this.control) {
      const errors = this.control.errors;
      if (errors) {
        const firstErrorKey = Object.keys(errors)[0];
        return this.errorMessages[firstErrorKey] || 'Invalid field';
      }
    }
    return '';
  }

  get isInvalid(): boolean {
    return this.control ? this.control.invalid && (this.control.dirty || this.control.touched) : false;
  }
}

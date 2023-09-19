import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  term = '';
  @Output() searchTerm = new EventEmitter<string>();
  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }
  onFormSubmit(event: Event) {
    event.preventDefault();
    this.searchTerm.emit(this.term);
  }
}

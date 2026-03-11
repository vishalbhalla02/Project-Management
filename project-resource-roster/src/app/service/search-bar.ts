import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBar {
  searchSignal = signal<string>("");

}

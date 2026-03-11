import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SearchBar } from '../../service/search-bar';
@Component({
  selector: 'app-search-filter',
  imports: [MatFormFieldModule, MatInputModule,MatIconModule],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {
  constructor(private searchBar: SearchBar){}
  handleSearch(event: Event){
    const target = event.target as HTMLInputElement;
    this.searchBar.searchSignal.set(target.value)
  }
}

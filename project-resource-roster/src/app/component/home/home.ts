import { Component } from '@angular/core';
import { SearchFilter } from '../search-filter/search-filter';
import { DataTable } from '../data-table/data-table';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [SearchFilter, DataTable],
    template: `
    <div class="max-w-200 m-auto">
      <app-search-filter></app-search-filter>
    </div>
    <app-data-table></app-data-table>
  `
})
export class Home { }

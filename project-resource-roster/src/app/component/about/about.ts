import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    template: `
    <div class="p-10 text-center">
      <h1 class="text-3xl font-bold">About Us</h1>
      <p class="mt-4">This is a Project Resource Roster management application.</p>
    </div>
  `
})
export class About { }

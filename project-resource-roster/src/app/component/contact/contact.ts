import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    template: `
    <div class="p-10 text-center">
      <h1 class="text-3xl font-bold">Contact Us</h1>
      <p class="mt-4">Email: support@resourceroster.com</p>
    </div>
  `
})
export class Contact { }

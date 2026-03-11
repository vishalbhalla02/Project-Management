import { Routes } from '@angular/router';



export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./component/home/home').then(m => m.Home)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./component/about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./component/contact/contact').then(m => m.Contact)
    },
    { path: '**', redirectTo: '' }
];
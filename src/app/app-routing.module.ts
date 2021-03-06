import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/homepage/pages.module#PagesModule'
  },
  {
    path: 'About',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  {
    path: 'ContactMe',
    loadChildren: './pages/contactMe/contact.module#ContactMeModule'
  },
  {
    path: 'MyWork',
    loadChildren: './pages/myWork/work.module#WorkModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

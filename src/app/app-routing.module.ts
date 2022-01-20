import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./container/home/home.component";
import {AboutComponent} from "./container/about/about.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'Home Page',
    },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'Page 404',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

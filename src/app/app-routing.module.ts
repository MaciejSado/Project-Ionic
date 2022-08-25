import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'galway',
    loadChildren: () => import('./galway/galway.module').then( m => m.GalwayPageModule)
  },
  {
    path: 'cork',
    loadChildren: () => import('./cork/cork.module').then( m => m.CorkPageModule)
  },
  {
    path: 'dublin',
    loadChildren: () => import('./dublin/dublin.module').then( m => m.DublinPageModule)
  },
  {
    path: 'limerick',
    loadChildren: () => import('./limerick/limerick.module').then( m => m.LimerickPageModule)
  },
  {
    path: 'places-galway',
    loadChildren: () => import('./places-galway/places-galway.module').then( m => m.PlacesGalwayPageModule)
  },
  {
    path: 'places-limerick',
    loadChildren: () => import('./places-limerick/places-limerick.module').then( m => m.PlacesLimerickPageModule)
  },
  {
    path: 'places-dublin',
    loadChildren: () => import('./places-dublin/places-dublin.module').then( m => m.PlacesDublinPageModule)
  },
  {
    path: 'places-cork',
    loadChildren: () => import('./places-cork/places-cork.module').then( m => m.PlacesCorkPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

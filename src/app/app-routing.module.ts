import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'level1',
    loadChildren: () => import('./level1/level1.module').then( m => m.Level1PageModule)
  },
  {
    path: 'level2',
    loadChildren: () => import('./level2/level2.module').then( m => m.Level2PageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule)
  },
  {
    path: 'completelevel2',
    loadChildren: () => import('./completelevel2/completelevel2.module').then( m => m.Completelevel2PageModule)
  },
  {
    path: 'level3',
    loadChildren: () => import('./level3/level3.module').then( m => m.Level3PageModule)
  },
  {
    path: 'completelevel3',
    loadChildren: () => import('./completelevel3/completelevel3.module').then( m => m.Completelevel3PageModule)
  },
  {
    path: 'completelevel4',
    loadChildren: () => import('./completelevel4/completelevel4.module').then( m => m.Completelevel4PageModule)
  },
  {
    path: 'l1a',
    loadChildren: () => import('./l1a/l1a.module').then( m => m.L1aPageModule)
  },
  {
    path: 'l1b',
    loadChildren: () => import('./l1b/l1b.module').then( m => m.L1bPageModule)
  },
  {
    path: 'l2a',
    loadChildren: () => import('./l2a/l2a.module').then( m => m.L2aPageModule)
  },
  {
    path: 'l1c',
    loadChildren: () => import('./l1c/l1c.module').then( m => m.L1cPageModule)
  },
  {
    path: 'l2b',
    loadChildren: () => import('./l2b/l2b.module').then( m => m.L2bPageModule)
  },
  {
    path: 'l2c',
    loadChildren: () => import('./l2c/l2c.module').then( m => m.L2cPageModule)
  },
  {
    path: 'l3a',
    loadChildren: () => import('./l3a/l3a.module').then( m => m.L3aPageModule)
  },
  {
    path: 'l3b',
    loadChildren: () => import('./l3b/l3b.module').then( m => m.L3bPageModule)
  },
  {
    path: 'l3c',
    loadChildren: () => import('./l3c/l3c.module').then( m => m.L3cPageModule)
  },
  {
    path: 'cl1a',
    loadChildren: () => import('./cl1a/cl1a.module').then( m => m.Cl1aPageModule)
  },
  {
    path: 'cl1b',
    loadChildren: () => import('./cl1b/cl1b.module').then( m => m.Cl1bPageModule)
  },
  {
    path: 'cl1c',
    loadChildren: () => import('./cl1c/cl1c.module').then( m => m.Cl1cPageModule)
  },
  {
    path: 'cl2a',
    loadChildren: () => import('./cl2a/cl2a.module').then( m => m.Cl2aPageModule)
  },
  {
    path: 'cl2b',
    loadChildren: () => import('./cl2b/cl2b.module').then( m => m.Cl2bPageModule)
  },
  {
    path: 'cl2-c',
    loadChildren: () => import('./cl2-c/cl2-c.module').then( m => m.Cl2CPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

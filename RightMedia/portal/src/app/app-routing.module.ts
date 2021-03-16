import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//order of routes matter: First Match wins
// keep at the end '' then **, routes are case sensitive
const routes: Routes = [
  {
    path: 'accountManager',
    loadChildren: () => import('./account-manager/account-manager.module')
      .then(m => m.AccountManagerModule),
    //  canLoad:
  },
  // {
  //   path:'',
  //   component:AppComponent
  // }
  //todo add PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules })//Eager Lazy Loading (fast start with lazy loading, but then download modules and user does not get delay when navigating to the feature module)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

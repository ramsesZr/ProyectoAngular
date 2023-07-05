import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreRamsesComponent } from './sobre-ramses/sobre-ramses.component';
import { ChisteComponent } from './chiste/chiste.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path : '' ,component : LayoutComponent,children:[
    {path: '' ,component : ChisteComponent},
    {path: 'sobreRamses' ,component : SobreRamsesComponent},
    {path: 'chiste' ,component : ChisteComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

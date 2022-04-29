import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindComponent } from './mind.component';

const routes: Routes = [
  {
    path: '', component: MindComponent, children: [
      {
        path: '', pathMatch: 'full', loadChildren: () => import('./components/text/text.module').then(m => m.TextModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MindRoutingModule { }

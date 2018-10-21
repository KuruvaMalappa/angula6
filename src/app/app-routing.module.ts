import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentAreaComponent } from './content-area/content-area.component';
import { ModelFormulaLayoutComponent } from './model-formula-layout/model-formula-layout.component';
import { ModelProcessedComponent } from './model-processed/model-processed.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboardcontent', pathMatch: 'full' },
  { path: 'dashboardcontent', component: ContentAreaComponent },
  { path: 'modelformula', component: ModelFormulaLayoutComponent },
  { path: 'modelprocessedhistory', component: ModelProcessedComponent },
  { path: '**', component: ContentAreaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

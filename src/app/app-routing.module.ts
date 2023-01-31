import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesListDeletedComponent } from './articles-list-deleted/articles-list-deleted.component';

const routes: Routes = [
  // Route par défaut : affiche la liste des articles
  { path: '', component: ArticlesListComponent },
  // Affiche la liste des articles
  { path: 'articles', component: ArticlesListComponent },
  // Affiche la liste des articles supprimés
  { path: 'articles-deleted', component: ArticlesListDeletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

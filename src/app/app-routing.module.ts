import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { FormComponent } from './pages/form/form.component';
import { ProdutosFormComponent } from './pages/produtos-form/produtos-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categorias',
    pathMatch: 'full',
  },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'categorias/criar', component: FormComponent },
  { path: 'categorias/:id', component: FormComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produtos/criar', component: ProdutosFormComponent },
  { path: 'produtos/:id', component: ProdutosFormComponent },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

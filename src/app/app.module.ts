import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { MenuComponent } from './core/menu/menu.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { FormComponent } from './pages/form/form.component';
import { CategoriaService } from './services/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosFormComponent } from './pages/produtos-form/produtos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ProdutoComponent,
    CategoriaComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    ProdutosFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CategoriaService],
  bootstrap: [AppComponent],
})
export class AppModule {}

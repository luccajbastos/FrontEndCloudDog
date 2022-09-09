import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css'],
})
export class ProdutosFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  // VARIÁVEIS
  public ParamId = this.route.snapshot.paramMap.get('id');
  public ultimoId = 0;

  // FORMULÁRIOS

  public produtosForm = this.formBuilder.group({
    id: [''],
    nome: [''],
    preco: [''],
    categoria: [''],
    descricao: [''],
  });

  ngOnInit(): void {
    this.ultimoId = 0;
    console.log(this.ParamId);
    console.log(this.ultimoId);

    if (this.ParamId == null) {
      console.log('Ok');
    } else {
      this.produtoService.ifCategoryExists(Number(this.ParamId)).subscribe({
        next: (res) => {
          if (res) {
            this.produtoService.list().subscribe({
              next: (res) => {
                this.produtosForm = this.formBuilder.group({
                  id: this.ParamId,
                  nome: [res[Number(Number(this.ParamId))].nome],
                  preco: [res[Number(Number(this.ParamId))].preco],
                  categoria: [res[Number(Number(this.ParamId))].categoria],
                  descricao: [res[Number(Number(this.ParamId))].descricao],
                });
              },
              error: (e) => console.log(e),
            });
          } else {
            alert('Esse produto não existe');
            this.router.navigateByUrl('/produtos');
          }
        },
      });
    }
  }

  // FUNÇÕES

  public submitForm(form: FormGroup) {
    if (this.ParamId) {
      this.produtoService
        .editProduct({
          id: Number(this.ParamId),
          body: form.value,
        })
        .subscribe({});
      this.router.navigateByUrl('/produtos');
    } else {
      this.produtoService
        .addProduct({
          id: this.ultimoId,
          nome: form.value.nome,
          preco: form.value.preco,
          categoria: form.value.categoria,
          descricao: form.value.descricao,
        })
        .subscribe({});
      this.router.navigateByUrl('/produtos');
    }
  }
}

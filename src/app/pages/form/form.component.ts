import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // VARIÁVEIS
  public ParamId = this.route.snapshot.paramMap.get('id');
  public ultimoId = 0;

  // FORMULÁRIOS
  public categoriaForm = this.formBuilder.group({
    id: [''],
    nome: [''],
    descricao: [''],
  });

  /*   public produtosForm: FormGroup = this.formBuilder.group({
    nome: [''],
    preco: [''],
    categoria: [''],
    descricao: [''],
  }); */

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.ultimoId = 0;
    console.log(this.ParamId);
    console.log(this.ultimoId);

    if (this.ParamId == null) {
      console.log('Ok');
    } else {
      this.categoriaService.ifCategoryExists(Number(this.ParamId)).subscribe({
        next: (res) => {
          if (res) {
            this.categoriaService.list().subscribe({
              next: (res) => {
                this.categoriaForm = this.formBuilder.group({
                  id: this.ParamId,
                  nome: [res[Number(Number(this.ParamId))].nome],
                  descricao: [res[Number(Number(this.ParamId))].descricao],
                });
              },
              error: (e) => console.log(e),
            });
          } else {
            alert('Essa categoria não existe');
            this.router.navigateByUrl('/categorias');
          }
        },
      });
    }
  }

  // FUNÇÕES

  public submitForm(form: FormGroup) {
    if (this.ParamId) {
      this.categoriaService
        .editCategorie({
          id: Number(this.ParamId),
          body: form.value,
        })
        .subscribe({});
      this.router.navigateByUrl('/categorias');
    } else {
      this.categoriaService
        .addCategorie({
          id: this.ultimoId,
          nome: form.value.nome,
          descricao: form.value.descricao,
        })
        .subscribe({});
      this.router.navigateByUrl('/categorias');
    }
  }
}

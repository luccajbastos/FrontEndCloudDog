import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  constructor(private categoriaService: CategoriaService) {}

  public list: Array<{ id: number; nome: string; descricao: string }> = [];

  public deleteForm(n: number) {
    this.categoriaService.delete(n).subscribe();
    this.list.pop();
  }

  ngOnInit(): void {
    this.categoriaService.list().subscribe({
      next: (res) =>
        res.map((e: any, index: number) => {
          this.list.push({
            id: res[index].id,
            nome: res[index].nome,
            descricao: res[index].descricao,
          });
        }),
    });
  }
}

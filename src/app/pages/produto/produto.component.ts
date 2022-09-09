import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  constructor(private produtoService: ProdutoService) {}

  public list: Array<{
    id: number;
    nome: string;
    preco: string;
    categoria: string;
    descricao: string;
  }> = [];

  public deleteForm(n: number) {
    this.produtoService.delete(n).subscribe();
    this.list.pop();
  }

  ngOnInit(): void {
    this.produtoService.list().subscribe({
      next: (res) =>
        res.map((e: any, index: number) => {
          this.list.push({
            id: res[index].id,
            nome: res[index].nome,
            preco: res[index].preco,
            categoria: res[index].categoria,
            descricao: res[index].descricao,
          });
        }),
    });
  }
}

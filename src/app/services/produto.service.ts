import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public ifCategoryExists(idExists: number): Observable<any> {
    return this.http.get<any>(`${this.url}/produtos`).pipe(
      map((res) => {
        if (res[idExists].id == idExists) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  public delete(id: number) {
    return this.http.delete(`${this.url}/produtos/${id}`);
  }

  public addProduct(payload: {
    id: number;
    nome: string;
    preco: string;
    categoria: string;
    descricao: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.url}/produtos`, payload);
  }

  public editProduct(payload: { id: number; body: any }): Observable<any> {
    console.log(payload);
    return this.http.put<any>(
      `${this.url}/produtos/${payload.id}`,
      payload.body
    );
  }

  public list(): Observable<any> {
    return this.http.get<any>(`${this.url}/produtos`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public ifCategoryExists(idExists: number): Observable<any> {
    return this.http.get<any>(`${this.url}/categorias`).pipe(
      map((res) => {
        console.log('idExists', idExists);
        console.log('id:', res[idExists].id);
        if (res[idExists].id == idExists) {
          return true;
        } else {
          return false;
        }
      })
    );
  }

  public delete(id: number) {
    return this.http.delete(`${this.url}/categorias/${id}`);
  }

  public addCategorie(payload: {
    id: number;
    nome: string;
    descricao: string;
  }) {
    return this.http.post<any>(`${this.url}/categorias`, payload);
  }

  public editCategorie(payload: { id: number; body: any }) {
    console.log(payload);
    return this.http.put<any>(
      `${this.url}/categorias/${payload.id}`,
      payload.body
    );
  }

  public list(): Observable<any> {
    return this.http.get<any>(`${this.url}/categorias`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}

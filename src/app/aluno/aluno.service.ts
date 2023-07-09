import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private baseUrl = 'http://localhost:8080/academico/alunos'; 

      openSnackBar(message: string) {
        this._snackBar.open(message, 'X', {
          duration:2000,
          verticalPosition:"top",
          horizontalPosition:"right"
        });
    }

  constructor(private http: HttpClient) { }

  getAlunos() {
    return this.http.get<Aluno[]>(this.baseUrl);
  }

  getAluno(id: number) {
    return this.http.get<Aluno>(`${this.baseUrl}/${id}`);
  }

  createAluno(aluno: Aluno) {
    return this.http.post(this.baseUrl, aluno);
  }

  updateAluno(aluno: Aluno) {
    return this.http.put(`${this.baseUrl}/${aluno.idaluno}`, aluno);
  }

  deleteAluno(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

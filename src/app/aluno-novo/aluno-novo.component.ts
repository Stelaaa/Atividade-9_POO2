import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent {
  aluno: Aluno = new Aluno(0, new Date(), '', '');

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  salvar() {
    this.alunoService.createAluno(this.aluno).subscribe(() => {
      
    });
  }

  cancelar() {
    this.router.navigate(['/alunos']); 
  }
}

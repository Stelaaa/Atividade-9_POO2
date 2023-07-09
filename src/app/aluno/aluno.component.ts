import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[];

  constructor(private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
    });
  }

  deleteAluno(id: number) {
    this.alunoService.deleteAluno(id).subscribe(() => {
      this.alunos = this.alunos.filter(aluno => aluno.idaluno !== id);
    });
  }
}

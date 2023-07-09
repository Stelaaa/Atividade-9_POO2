import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.css']
})
export class AlunoEditarComponent implements OnInit {
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.alunoService.getAluno(id).subscribe(aluno => {
      this.aluno = aluno;
    });
  }

  saveAluno() {
    this.alunoService.updateAluno(this.aluno).subscribe(() => {
      // navigate to the list of students or show a success message
    });
  }
}

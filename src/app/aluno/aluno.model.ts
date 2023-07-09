export class Aluno {
    idaluno: number;
    dt_nasc: Date;
    nome: string;
    sexo: string;
  
    constructor(idaluno: number, dt_nasc: Date, nome: string, sexo: string) {
      this.idaluno = idaluno;
      this.dt_nasc = dt_nasc;
      this.nome = nome;
      this.sexo = sexo;
    }
  }
  
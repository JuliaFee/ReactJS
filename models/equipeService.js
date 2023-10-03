"use client";
export class EquipeService {
    constructor() {
      this.equipes = [];
    }
    // CRUD = Create, Read, Update, Delete
    // C = Create
  
    adicionarEquipe(parametro) {
      this.equipes.push(parametro);
    }
  
    // R = Read
    listarEquipes() {
      return this.equipes;
    }
    listarEquipesPorId(parametro) {
      return this.equipes.find((equipe) => equipe.id === parametro);
    }
  
    // U = Update
    atualizarEquipe(id, nome, titulares) {
      const equipe = this.listarEquipesPorId(id);
  
      equipe.nome = nome;
      equipe.titulares = titulares;
      equipe.reservas = equipe.calcularReservas();
      equipe.totalJogadores = equipe.calcularTotalJogadores();
    }
    deletarEquipe(parametro) {
      this.equipes = this.equipes.filter((equipe) => equipe.id !== parametro);
    }
  }
  
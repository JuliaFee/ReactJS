"use client";
export class Equipe {
    constructor(nome, titulares) {
      this.id = this.gerarId();
      this.nome = nome;
      this.titulares = titulares;
      this.reservas = this.calcularReservas();
      this.totalJogadores = this.calcularTotalJogadores();
    }
    gerarId() {
      return Math.floor(Math.random() * 1000);
    }
    calcularReservas() {
      return Math.floor(this.titulares / 2);
    }
    calcularTotalJogadores() {
      return this.titulares + this.reservas;
    }
  }
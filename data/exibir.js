"use client";
import React from "react";
import { useState } from "react";
import { EquipeService } from "../models/equipeService";
import { Equipe } from "../models/equipe";

const equipeService = new EquipeService();

function Exibir() {
  const [nomeDaEquipe, setNomeDaEquipe] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [equipeId, setEquipeId] = useState(null);
  const [equipes, setEquipes] = useState([]);
  const [equipeUnica, setEquipeUnica] = useState(null);

  function criarEquipe() {
    const nome = nomeDaEquipe;
    const titulares = Number(quantidade);

    const novaEquipe = new Equipe(nome, titulares);
    equipeService.adicionarEquipe(novaEquipe);
    listarEquipes();
    limparInputs();
  }

  function listarEquipes() {
    const equipes = equipeService.listarEquipes();
    setEquipes(equipes);
  }

  function listarEquipePorId(id) {
    const equipe = equipeService.listarEquipesPorId(id);
    setEquipeUnica(equipe);
  }

  function atualizarEquipe(id) {
    const equipe = equipeService.listarEquipesPorId(id);

    setNomeDaEquipe(equipe.nome);
    setQuantidade(equipe.titulares);

    setEquipeId(id);
  }

  function editarEquipe() {
    equipeService.atualizarEquipe(equipeId, nomeDaEquipe, quantidade);
    listarEquipes();

    setNomeDaEquipe('');
    setQuantidade('');
    setEquipeId(null);
    setEquipeUnica(null);
  }

  function limparInputs() {
    setNomeDaEquipe('');
    setQuantidade('');
  }

  function deletarEquipe(id) {
    equipeService.deletarEquipe(id);
    listarEquipes();
    setEquipeUnica(null);
  }

  return (
    <div className="exibir">
      <h2>Cadastro de equipes</h2>
      <div>
        <input
          id="nomeDaEquipe"
          type="text"
          value={nomeDaEquipe}
          placeholder="Nome da Equipe"
          onChange={(parametro) => setNomeDaEquipe(parametro.target.value)}
        />

        <input
          id="quantidade"
          type="number"
          value={quantidade}
          placeholder="Jogadores Titulares"
          onChange={(parametro) => setQuantidade(parametro.target.value)}
        />
      </div>

      {equipeId ? (
        <button onClick={editarEquipe}>Editar Equipe</button>
      ) : (
        <button onClick={criarEquipe}>Cadastrar</button>
      )}

      <div id="listarEquipes">
        {equipes.map((equipe) => (
          <div key={equipe.id} onClick={() => listarEquipePorId(equipe.id)}>
            <p>Nome: {equipe.nome}</p>
          </div>
        ))}
      </div>

      {equipeUnica && (
        <div id="listarEquipeUnica">
          <p>ID: {equipeUnica.id}</p>
          <p>Nome: {equipeUnica.nome}</p>
          <p>Total de jogadores: {equipeUnica.totalJogadores}</p>
          <p>Titulares: {equipeUnica.titulares}</p>
          <p>Reservas: {equipeUnica.reservas}</p>
          <button onClick={() => atualizarEquipe(equipeUnica.id)}>Editar</button>
          <button onClick={() => deletarEquipe(equipeUnica.id)}>Deletar</button>
        </div>
      )}
    </div>
  );
}

export default Exibir;
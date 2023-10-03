"use client";
import React from "react";
import { useState } from "react";
import { EquipeList } from "../models/equipeList";
import { Equipe } from "../models/equipe";
import style from "../app/page.module.css";
import { MdDelete } from "react-icons/md"
import { FiEdit } from "react-icons/fi"
const equipeList = new EquipeList();

function Exibir() {
  const [nomeDaEquipe, setNomeDaEquipe] = useState('');
  const [numero, setNumero] = useState('');
  const [equipeId, setEquipeId] = useState(null);
  const [equipes, setEquipes] = useState([]);
  const [equipeUnica, setEquipeUnica] = useState(null);

  function criarEquipe() {
    const nome = nomeDaEquipe;
    const titulares = Number(numero);

    const novaEquipe = new Equipe(nome, titulares);
    equipeList.adicionarEquipe(novaEquipe);
    listarEquipes();
    limparInputs();
  }

  function listarEquipes() {
    const equipes = equipeList.listarEquipes();
    setEquipes(equipes);
  }

  function listarEquipePorId(id) {
    const equipe = equipeList.listarEquipesPorId(id);
    setEquipeUnica(equipe);
  }

  function atualizarEquipe(id) {
    const equipe = equipeList.listarEquipesPorId(id);

    setNomeDaEquipe(equipe.nome);
    setNumero(equipe.titulares);

    setEquipeId(id);
  }

  function editarEquipe() {
    equipeList.atualizarEquipe(equipeId, nomeDaEquipe, numero);
    listarEquipes();

    setNomeDaEquipe('');
    setNumero('');
    setEquipeId(null);
    setEquipeUnica(null);
  }

  function limparInputs() {
    setNomeDaEquipe('');
    setNumero('');
  }

  function deletarEquipe(id) {
    equipeList.deletarEquipe(id);
    listarEquipes();
    setEquipeUnica(null);
  }

  return (
    <div className={style.exibir}>
      <h2 className={style.title}>Cadastro de equipes</h2>
      <div>
        <input
          className={style.nomeDaEquipe}
          type="text"
          value={nomeDaEquipe}
          placeholder="Nome da Equipe"
          onChange={(parametro) => setNomeDaEquipe(parametro.target.value)}
        />

        <input
          className={style.numero}
          type="number"
          value={numero}
          placeholder="Jogadores Titulares"
          onChange={(parametro) => setNumero(parametro.target.value)}
        />
      </div>

      {equipeId ? (
        <button className={style.mainbtn} onClick={editarEquipe}>Editar Equipe</button>
      ) : (
        <button className={style.mainbtn} onClick={criarEquipe}>Cadastrar</button>
      )}

      <div id="listarEquipes">
        {equipes.map((equipe) => (
          <div className={style.render} key={equipe.id} onClick={() => listarEquipePorId(equipe.id)}>
            <p>Nome: {equipe.nome}</p>
          </div>
        ))}
      </div>

      {equipeUnica && (
        <div>
          <p>ID: {equipeUnica.id}</p>
          <p>Nome: {equipeUnica.nome}</p>
          <p>Total de jogadores: {equipeUnica.totalJogadores}</p>
          <p>Titulares: {equipeUnica.titulares}</p>
          <p>Reservas: {equipeUnica.reservas}</p>
          <button className={style.editar} onClick={() => atualizarEquipe(equipeUnica.id)}><FiEdit/></button>
          <button className={style.delete} onClick={() => deletarEquipe(equipeUnica.id)}><MdDelete/></button>
        </div>
      )}
    </div>
  );
}

export default Exibir;
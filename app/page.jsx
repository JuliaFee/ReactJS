import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import React from "react";


export default function Home() {
  return (
    <>
    <Header/>
    <div>
    <div className={header}>
        <button type="button" onclick="showLisrt()" className="cadastro">Cadastro</button>
        <button type="button" onclick="showForm()" className="exibicao">Exibição</button>

        </div>
    </div>

    <div className="container">
        <h2 className="titulo">
            Cadastro de Pets🐾
        </h2>
        <div className="input-container">
            <label for="tutor">Tutor:</label>
            <input type="text" className="tutor">

            <label for="nomedopet">Nome do Pet:</label>
            <Input type="text" className="nomedopet">

            <label for="especie">Espécie:</label>
            <input type="text" className="especie">

            <label for="imgLink">Fotinha:</label>
            <input type="text" className="imglink">

            <label for="date">Data de Nascimento</label>
            <input type="date" className="date">


            <div className="msg"></div>

            <button className="botao_cadastro" type="button" onclick="comporclinicavt()">Cadastrar</button>

        </div>

    </div>
    <div className="container-cvt">
        <div className="cvt">

        </div>
    </div>
    <footer className="footer">
        <p>©2023 Clínica Veterinária Todos os direitos reservados.</p>
    </footer>

</div>

    <Footer/>
   
    
    </>
  )
}

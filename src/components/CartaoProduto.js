import "./styles/CartaoProduto.css";
import Botao from "../components/Botao.js";
import React, { useState } from "react";
import image from "../utils/img/iPhone.png";

function CartaoProduto(props) {
  const produto = props.produto;

  const [mostrarDescricao, setMostrarDescricao] = useState(false);

  function alternarDescricao(e) {
    e.preventDefault();
    setMostrarDescricao(!mostrarDescricao);
  }

  return (
    <div className="cartao-produto">
      <div className="conteudo" onClick={alternarDescricao}>
        <div className="descricao-container">
          {mostrarDescricao ? (
            <p className="descricao">{produto.descricao}</p>
          ) : (
            <img className="imagem" src={image} />
          )}
        </div>

        <p className="titulo">{produto.nome}</p>

        <p className="subtitulo">{produto.subtitulo}</p>

        <div className="preco">
          <span className="moeda">R$</span>
          <span>{produto.preco}</span>
        </div>
      </div>

      <div className="botoes">
        <Botao
          texto="Editar"
          tipo="editar"
          clique={(e) => props.editar(e, props.produto)}
        />

        <Botao
          texto="Excluir"
          tipo="excluir"
          clique={(e) => props.excluir(e, produto.id)}
        />
      </div>
    </div>
  );
}

export default CartaoProduto;

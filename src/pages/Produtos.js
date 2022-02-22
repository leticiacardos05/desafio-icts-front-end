import "./styles/Produtos.css";
import CartaoProduto from "../components/CartaoProduto.js";
import NovoProdutoModal from "../components/NovoProdutoModal";
import Botao from "../components/Botao.js";
import mockData from "../utils/mockData.js";
import React, { useState } from "react";

function Produtos() {
  let [dados, setDados] = useState(mockData);

  const [exibirModal, setExibirModal] = useState(false);
  const [editarModal, setEditarModal] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  function novoProduto(produto) {
    if (produto.id) return editarProduto(produto);

    const novo = { ...produto, id: dados.length + 1 };
    const novoArray = [...dados, novo];

    setDados((dados = novoArray));
  }

  function editarProduto(produto) {
    const produtoEditado = dados.map((item) => {
      if (item.id === produto.id) return produto;
      return item;
    });

    setDados((dados = produtoEditado));
  }

  function alternarModalEditarProduto(e, produto) {
    e.preventDefault();

    alternarModal(e, true);
    setProdutoSelecionado(produto);
  }

  function excluirProduto(e, id) {
    e.preventDefault();

    const produtoRemovido = dados.filter((produto) => produto.id !== id);
    setDados((dados = produtoRemovido));
  }

  function alternarModal(e, editar = false) {
    e.preventDefault();

    setEditarModal(editar);
    setExibirModal(!exibirModal);
  }

  return (
    <div>
      <NovoProdutoModal
        exibir={exibirModal}
        fechar={alternarModal}
        editar={editarModal}
        produto={produtoSelecionado}
        novoProduto={novoProduto}
      />

      <div className="botao-container">
        <Botao texto="Novo Produto" tipo="novo" clique={alternarModal} />
      </div>

      <div className="produtos">
        {dados.map((produto, index) => (
          <CartaoProduto
            key={index}
            produto={produto}
            excluir={excluirProduto}
            editar={alternarModalEditarProduto}
          />
        ))}
      </div>
    </div>
  );
}

export default Produtos;

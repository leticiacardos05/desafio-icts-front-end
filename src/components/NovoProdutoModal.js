import "./styles/NovoProdutoModal.css";
import Botao from "./Botao.js";

function NovoProdutoModal(props) {
  if (!props.exibir) return null;

  function salvar(e) {
    e.preventDefault();

    const formulario = new FormData(e.target);
    const dados = Object.fromEntries(formulario);

    if (props.editar) {
      dados.id = props.produto.id;
    }

    props.novoProduto(dados);
    props.fechar(e);
  }

  return (
    <div className="novo-produto-modal">
      <div className="conteudo">
        <p className="titulo">
          {props.editar ? `Editar ${props.produto.nome}` : "Criar novo produto"}
        </p>

        <form onSubmit={salvar}>
          <div className="input-container">
            <div>
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                required
                defaultValue={props.editar ? props.produto.nome : ""}
              />
            </div>

            <div>
              <label>Subtitulo</label>
              <input
                type="text"
                name="subtitulo"
                required
                defaultValue={props.editar ? props.produto.subtitulo : ""}
              />
            </div>

            <div>
              <label>Descrição</label>
              <textarea
                type="text"
                name="descricao"
                required
                defaultValue={props.editar ? props.produto.descricao : ""}
              />
            </div>

            <div>
              <label>Preço</label>
              <input
                type="number"
                name="preco"
                placeholder="R$"
                required
                defaultValue={props.editar ? props.produto.preco : ""}
              />
            </div>
          </div>

          <div className="botoes-container">
            <Botao texto="Salvar" tipo="novo" submit="submit" />
            <Botao texto="Cancelar" tipo="excluir" clique={props.fechar} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NovoProdutoModal;

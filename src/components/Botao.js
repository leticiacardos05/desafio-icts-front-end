import "./styles/Botao.css";

function Botao(props) {
  return (
    <button
      onClick={props.clique}
      className={`botao ${props.tipo}`}
      type={props.submit}
    >
      {props.texto}
    </button>
  );
}

export default Botao;

import { useState } from "react";

export default function Exemplo1() {

  function somar() {

    let n1, n2, soma;
    n1 = Number(numero1);
    n2 = Number(numero2);
    soma = n1 + n2; 
   
    setResultado (" A soma dos números é " + soma);

  }
  function limpar() {

  }

  const [numero1, setNumero1] = useState(22);
  const [numero2, setNumero2] = useState(5);
  const [resultado, setResultado] = useState();


  return (
    <div>
      <h1>Exemplo 1</h1>

      <div className="conteudo">

        <h3>Exemplo do UseState</h3>

        <p>
          O objetivo aqui sera receber dois números, soma-los, e exibir o resultado.
        </p>

        <form>
          <p>
            Digite o primeiro número<br />
            <input type="text" value={numero1}
              onChange={(e) => setNumero1(e.target.value)} />
          </p>

          <p>
            Digite o segundo número<br />
            <input type="text" value={numero2}
              onChange={(e) => setNumero2(e.target.value)} />

          </p>

          <p>
            <input type="button" value="Calcular"
              onClick={somar} />
          </p>

          <p>
            Número1 = {numero1} <br />
            Número2 = {numero2}
            {resultado}
          </p>

        </form>
        <a href="/">Voltar</a>
      </div>

    </div>
  );
}

import { useState } from "react";

export default function Exemplo2() {
  function media() {

    let n1, n2, media;
    n1 = Number(numero1);
    n2 = Number(numero2);
    media = n1 + n2 /2; 
   
    setResultado (" A média dos números é " + media);
  }
  function limpar() {

  }

  const [numero1, setNumero1] = useState(22);
  const [numero2, setNumero2] = useState(5);
  const [resultado, setResultado] = useState();


  return (
    <div>
      <h1>Exemplo 2</h1>
      <div className="conteudo">
        <h3>Calculo da Média Aritmética</h3>
        <p>
    O objetivo aqui sera receber o nome do aluno, suas 2 notas e calcular a média. 
  </p>
        <p>
        Nome do Aluno:<br/>
      <input type="text" /> 
        </p>

        <p>
        Nota 1:<br/>
      <input type="text" value={numero1}
              onChange={(e) => setNumero1(e.target.value)} />
        </p>

        <p>
        Nota 2:<br/>
      <input type="text"value={numero2}
              onChange={(e) => setNumero2(e.target.value)} /> 
        </p>

        <p>
      <input type="button" value="Calcular"
      onClick={media} />
    </p>
    <p>
            Número1 = {numero1} <br />
            Número2 = {numero2}
            {resultado}
          </p>

    <a href="/">Voltar</a>
      </div>

      
    </div>
  );
}

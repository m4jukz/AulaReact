import { useState } from "react";
export default function Exercicio4() {
  const[base, setNumero1]= useState();
  const[altura, setNumero2]= useState();
  const[resultado, setResultado]= useState();

  function area() {

    let base, altura, area;
    base = Number(base);
    altura = Number(altura);
    area = (base * altura) / 2; 
   
    setResultado (" A area dos números é " + area);
  }

    return (
      <div>
       <h1>Exercicio 4</h1> 
       <div className="conteudo">
       <form>
    <p>

      Digite o valor da base:<br/>
      <input type="text"value={base}
              onChange={(e) => setNumero1(e.target.value)} />
    </p>

    <p>
      Digite o valor da altura:<br/>
      <input type="text"value={altura}
              onChange={(e) => setNumero2(e.target.value)} /> 
    </p>

    <p>
        <input type="button" value="Calcular"
      onClick={area} />
    
    </p>
            Base = {base} <br />
            Altura = {altura}
            {resultado}
          <p>
          </form>
<p>
        <a href="/">Voltar</a>
    </p>
        </div>
        </div>
    )
        }

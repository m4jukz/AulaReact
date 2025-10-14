import { useState } from "react";
export default function Exercicio3() {

  const[valor, setNumero1]= useState(0);
  const[taxa, setNumero2]= useState();
  const[tempo, setNumero3]= useState();
  const[resultado, setResultado]= useState();


  function calcular()
{
  
  let parcela =Number(valor) + (valor*((taxa*taxa)/100)*tempo);

  setResultado("o valor da sua parcela atualizado  é " + parcela );

}
    return (
        <div>
            <h1>Exercicio 3 </h1>
    
      <div className="conteudo">
        <form>
          
          <p>
            Digite o valor da prestação: <br />
            <input type="text" value={valor}
            onChange={ (e) => setNumero1(e.target.value)}/>
          </p>
        
          <p>
            Digite a taxa de juros: <br />
            <input type="text" value={taxa}
            onChange={ (e) => setNumero2(e.target.value)}/>
          </p>

          <p>
            Digite o tempo (em dias) de atraso: <br />
            <input type="text" value={tempo}
            onChange={ (e) => setNumero3(e.target.value)}/>
          </p>
      
      
          <p>
            <input type="button" value="Exercicio3" 
            onClick={calcular} />
          </p>

          <p>
            <b>Resultado</b> <br />
            o valor da sua parcela é {valor} <br />
            o valor da taxa é {taxa} <br />
            seu tempo de atraso foi {tempo} <br />
            O novo valor da parcela é: {resultado}
          </p>
          <a href="/">Voltar</a>
        </form>
        </div>
        </div>
    );
}